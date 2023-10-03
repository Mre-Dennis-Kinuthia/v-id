const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAllLearners() {
    try {
        const learners = await prisma.learner.findMany();
        return learners;
    } catch (error) {
        console.error('Error fetching learners:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { getAllLearners };
