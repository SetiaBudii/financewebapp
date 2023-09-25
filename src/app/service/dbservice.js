import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findByUsername(username) {
  try {
    const username = await prisma.users.findMany({
      where: {
        username: username,
      },
    });
    return username;
  } catch (error) {
    throw new Error(`Error finding user by username: ${error.message}`);
  }
}

export { findByUsername };
