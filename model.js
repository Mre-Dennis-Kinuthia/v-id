// models.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  createRecord: async (data) => {
    try {
      const record = await prisma.yourModel.create({ data });
      return record;
    } catch (error) {
      throw error;
    }
  },
};
