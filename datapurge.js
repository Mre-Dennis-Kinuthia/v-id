const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function purgeData() {
    try {
        // Delete all data from the UserProfile table
        await prisma.userProfile.deleteMany();

        // If you have more tables, you can add similar deleteMany calls for each table.

        console.log('Data purged successfully');
    } catch (error) {
        console.error('Error purging data:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

// Call the purgeData function to start the data purging process
purgeData();
