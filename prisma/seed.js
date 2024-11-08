const { PrismaClient } = require('@prisma/client');
const data = require('./MOCK_DATA.json');
const prisma = new PrismaClient();

async function main() {
    // user_2nwTzVMkdQ1qlCpYSApPNnyHl4j
  const clerkId = 'user_2nwTzVMkdQ1qlCpYSApPNnyHl4j';
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });