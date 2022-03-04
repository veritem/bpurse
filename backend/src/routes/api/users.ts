import { FastifyPluginAsync } from 'fastify';

const users: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.addHook('onRequest', fastify.authenticate);

	fastify.get(
		'/',
		{
			schema: {
				tags: ['users'],
				summary: 'Get all users',
				description: 'Get all users',
				security: [{ bearerAuth: [] }]
			}
		},
		async function (_request, _reply) {
			return await fastify.prisma.user.findMany();
		}
	);

	fastify.get(
		'/auth/me',
		{
			schema: {
				tags: ['auth'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async function (req, _resp) {
			return req.user;
		}
	);
};

export default users;
