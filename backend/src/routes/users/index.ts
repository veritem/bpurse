import {FastifyPluginAsync} from "fastify"

const users: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/', async function (_request, _reply) {
    return await fastify.prisma.user.findMany()
  })
}

export default users;
