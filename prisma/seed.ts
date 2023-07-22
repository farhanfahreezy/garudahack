import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.$transaction([
    prisma.course.createMany({
      data:[
        {
          title: 'Belajar UI/UX',
          desc:'Belajar UI/UX',
          moduleTime: 10,
          provider: 'Udemy',
        },
        {
          title: 'Belajar ReactJS',
          desc:'Belajar ReactJS',
          moduleTime: 10,
          provider: 'Udemy',
        }
      ]
    }),
    prisma.module.createMany({
      data:[
        {
          courseId: 1,
          title: 'Pengenalan UI/UX',
          desc:'Pengenalan UI/UX',
          moduleTime: 10,
        },
        {
          courseId: 2,
          title: 'Pengenalan ReactJS',
          desc:'Pengenalan ReactJS',
          moduleTime: 10,
        }
      ]
    }),
    prisma.task.createMany({
      data:[
        {
          moduleId: 1,
          answer: 'User Interface & User Experience',
          question: 'Apa itu UI/UX?',
          multipleChoice: ['User Interface', 'User Experience', 'User Interface & User Experience'],
        },{
          moduleId: 2,
          answer: 'Library Javascript',
          question: 'Apa itu ReactJS?',
          multipleChoice: ['Library Javascript', 'Framework Javascript', 'Library Javascript & Framework Javascript'],
        }
      ]
    }),
    prisma.user.create({
      data: {
        name: 'Alice',
        email: 'Alice@gmail.com' ,
        password: 'admin',
        dataUser :{
          create:{
            age: 20,
            accomodationNeeded: 'Kursi Roda',
            communicationPreferences: 'Voice Command',
            carrierGoals: 'Dirut Pertamina',
            levelEducation: 'S1',
            limitationDesc: 'Buta Parsial',
            partBody: 'Mata',
            phoneNumber: '08123456789',
            workExperience: '5 Tahun di bidang Software Engineer',
            preferedIndustry: 'IT',
            softSkills: 'Leadership',
            technicalSkills: 'ReactJS',
          }
        },
        recommendation:{
          create:{
            character: 'Keras kepala',
            strength: 'Bisa kerja keras',
            courseRecommendation: ['Kursus Bahasa Inggris'],
            jobRecommendation: ['Software Engineer'],
          }
        },
        courses:{
          createMany:{
            data:[
              {
                id:1,
                courseId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              {
                id:2,
                courseId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
                status: true,
              }
            ]
          }
        },
        settings:{
          create:{
            colorBlind: true,
            fontSize: 'SMALL',
            notification: true,
            notificationSound: true,
            voiceAssistance: true,
          }
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }),
    prisma.moduleOnUser.createMany({
      data:[
        {
          courseOnUserId: 1,
          moduleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(), 
        },
        {
          courseOnUserId: 2,
          moduleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    })
  ])
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