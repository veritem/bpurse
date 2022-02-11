import fp from "fastify-plugin"
import {FastifyPluginAsync} from "fastify"
import {PrismaClient} from "@prisma/client"

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server, _opts) => {

  const prisma = new PrismaClient()

  //TODO: add prisma client to fastify instance
  await prisma.$connect()

  server.decorate("prisma", prisma)

  server.addHook("onClose", () => {
    prisma.$disconnect()
  })

})


export default prismaPlugin
