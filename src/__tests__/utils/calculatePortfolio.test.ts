import {
  EXAMPLE_RESULTS,
  PROJECTS_DATA,
  calculatePortfolio,
} from "../../utils";

describe("utils functions tests", () => {
  it("calculatePortfolio: 60 credits should return as in the example ", async () => {
    const portfolioProjects = PROJECTS_DATA.map((project) => ({
      ...project,
      weight: 0,
      isActive: true,
    }));
    const portfolioResult = calculatePortfolio(portfolioProjects, 60);
    portfolioResult.forEach((project, index) => {
      expect(project.weight).toEqual(EXAMPLE_RESULTS[index]);
    });
  });
});
