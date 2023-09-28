const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fetchData() {
    try {
        const userData = await prisma.userProfile.findMany();
        
        if (userData.length > 0) {
            console.log('Data fetched from the database:');
            console.table(userData);
        } else {
            console.log('No data found in the database.');
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

fetchData();