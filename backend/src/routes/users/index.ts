import {FastifyPluginAsync} from "fastify"

const users: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get('/',{
  schema: {
    tags: ['users'],
    summary: 'Get all users',
    description: 'Get all users',
    response: {
      200: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'The user id'
                },
                name: {
                  type: 'string',
                  description: 'The user name'
                }
              }
            }
          }
        }
      }
    }
  }
  }, async function (_request, _reply) {
    return await fastify.prisma.user.findMany()
  })
}

export default users;
