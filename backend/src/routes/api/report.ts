import { FastifyPluginAsync } from "fastify";

const report: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {

    //TODO: add hook to handle authentication

    fastify.get("/reports/transactions/:startDate/:endDate", {
        schema: {
            tags: ["report"],
        }
    }, async (req, res) => {
        return { message: true }
    })

    fastify.get("/reports/budget/:startDate/:endDate", {
        schema: {
            tags: ["report"],
        }
    }, async (req, res) => {
        return { message: true }
    })

}

export default report
