import { FastifyPluginAsync } from "fastify"

const notifications: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {

    //TODO: add hook to handle authentication

    fastify.get("/notifications", {
        schema: {
            tags: ["notifications"],
        }
    }, async (_req, _res) => {
        return await fastify.prisma.notification.findMany()
    })

}

export default notifications
