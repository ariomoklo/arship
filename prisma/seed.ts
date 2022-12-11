import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main () {
  await prisma.group.upsert({
    where: { name: 'global' },
    update: {},
    create: {
      name: 'global',
      createdBy: 'arship',
      apps: {
        createMany: {
          data: [
            { code: 'sius', name: 'Circling Users', icon: '/img/app-icon/fake-1.png', createdBy: 'Ario Widiatmoko' },
            { code: 'mcf', name: 'Many Circle Flow-er', icon: '/img/app-icon/fake-2.png', createdBy: 'Ario Widiatmoko' }
          ]
        }
      }
    }
  })

  await prisma.group.upsert({
    where: { name: 'mygroup' },
    update: {},
    create: {
      name: 'mygroup',
      createdBy: 'Ario Widiatmoko',
      apps: {
        createMany: {
          data: [
            { code: 'nice', name: 'Nice Movie App', icon: '/img/app-icon/fake-3.png', createdBy: 'Ario Widiatmoko' },
            { code: 'mbike', name: 'Mountaining Biking', icon: '/img/app-icon/fake-4.png', createdBy: 'Ario Widiatmoko' }
          ]
        }
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })