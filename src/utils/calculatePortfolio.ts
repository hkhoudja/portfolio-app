import { Project } from "@prisma/client";

export type PortfolioProject = Project & { isActive: boolean; weight: number };

function normalizeWeightDistribution(projects: PortfolioProject[]) {
  const totalWeightDistribution = projects.reduce((acc, project) => {
    if (project.weight >= project.volumeInTon) return acc;

    return acc + project.distributionWeight;
  }, 0);
  return projects.map((project) => {
    return {
      ...project,
      distributionWeight: project.isActive
        ? project.distributionWeight / totalWeightDistribution
        : 0,
    };
  });
}

function activeProjects(projects: PortfolioProject[]) {
  return projects.some((project) => project.isActive);
}

function distributeWeights(
  projects: PortfolioProject[],
  distribution: number[]
) {
  const projectsAfterDistribution = projects.map((project, index) => {
    const hasEnoughCredits =
      project.weight + distribution[index] <= project.volumeInTon;
    const remainingCredit = !hasEnoughCredits
      ? distribution[index] + project.weight - project.volumeInTon
      : 0;
    const weight = hasEnoughCredits
      ? project.weight + distribution[index]
      : project.volumeInTon;
    return {
      ...project,
      weight,
      remainingCredit,
      isActive: weight < project.volumeInTon,
    };
  });
  const remainingCredit = projectsAfterDistribution.reduce((acc, project) => {
    return acc + project.remainingCredit;
  }, 0);
  return {
    remainingCredit,
    projectsAfterDistribution,
  };
}

export function calculatePortfolio(
  projects: PortfolioProject[],
  credits: number
) {
  // stop condition: no more credits to spend
  if (Math.floor(credits) <= 0) {
    return projects;
  }

  // stop condition: ran out of project credits
  if (!activeProjects(projects)) {
    return projects;
  }

  //filter out projects with no credit
  const projectsWithNormalizedWeights = normalizeWeightDistribution(projects);

  // distribution if illimited credits
  const naiveDistribution = projectsWithNormalizedWeights.map(
    (project) => credits * project.distributionWeight
  );

  const { remainingCredit, projectsAfterDistribution } = distributeWeights(
    projectsWithNormalizedWeights,
    naiveDistribution
  );

  if (remainingCredit === 0) {
    return projectsAfterDistribution;
  }

  // reset rest
  const remainingProjects = projectsAfterDistribution.map((project) => ({
    ...project,
    remainingCredit: 0,
  }));

  // branching
  return calculatePortfolio(remainingProjects, remainingCredit);
}
