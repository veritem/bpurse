import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.get('/', async function (_req, _resp) {
		return { root: true };
	});
};

export default root;
