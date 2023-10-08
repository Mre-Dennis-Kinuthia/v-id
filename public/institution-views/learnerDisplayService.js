const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Function to fetch and return all learners from the database
async function getAllLearners() {
    try {
        const learners = await prisma.learnerProfile.findMany();
        return learners;
    } catch (error) {
        throw new Error('Error fetching learners: ' + error.message);
    }
}

module.exports = {
    getAllLearners,
};
