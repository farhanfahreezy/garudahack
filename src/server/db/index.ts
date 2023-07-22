import { PrismaClient } from "@prisma/client";

const instantiatePrisma = () => {
  const prisma = new PrismaClient({});

  return prisma;
};

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? instantiatePrisma();