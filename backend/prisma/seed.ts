import { PrismaClient} from "@prisma/client"
import {faker} from "@faker-js/faker"

const prisma = new PrismaClient()



async function main() {
  let numberOfUsers = 0

  while(numberOfUsers < 10) {
  await prisma.user.create({
      data: {
         email: faker.internet.email(),
         name: faker.internet.userName(),
      },
   }) 
   numberOfUsers++
  };
}


main().catch(e => {
  console.error(e);
  process.exit(1);
});
