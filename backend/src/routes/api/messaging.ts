import { FastifyPluginAsync } from "fastify";

const messaging: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {

    fastify.get("/messaging", {
        schema: {
            tags: ["messaging"],
        }
    }, async (_req, _res) => {
        return await fastify.prisma.messaging.findMany();
    });



}


export default messaging 
