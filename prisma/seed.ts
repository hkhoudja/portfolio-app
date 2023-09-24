const { execSync } = require("child_process");

const { PrismaClient } = require('@prisma/client');
const projects = require('./seedData.ts');

const prisma = new PrismaClient();

async function createProjects() {
    return prisma.project.createMany({
        data: projects,
    });
}

async function seed() {
    const databaseResetCommand = 'npx prisma migrate reset -f';
    console.log('Resetting database');
    execSync(databaseResetCommand, { stdio: 'inherit' });
    
    await createProjects();
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
