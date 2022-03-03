import { Static, Type } from '@sinclair/typebox';
import { FastifyPluginAsync } from 'fastify';

const createOrUpdate = Type.Object({
	replyId: Type.String(),
	message: Type.String()
});

type CreateOrUpdate = Static<typeof createOrUpdate>;

const messaging: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.addHook('onRequest', fastify.authenticate);

	fastify.get(
		'/messaging',
		{
			schema: {
				tags: ['messaging'],
				security: [{ bearerAuth: [] }]
			}
		},
		async (_req, _res) => {
			return await fastify.prisma.message.findMany();
		}
	);

	fastify.post<{ Body: CreateOrUpdate }>(
		'/messaging',
		{
			schema: {
				tags: ['messaging'],
				body: createOrUpdate,
				security: [{ bearerAuth: [] }]
			}
		},
		async (req, _res) => {
			const { replyId, message } = req.body;

			return await fastify.prisma.message.create({
				data: {
					replyId,
					message,
					userId: req.user.id
				}
			});
		}
	);

	fastify.get<{ Params: { id: string } }>(
		'/messaging/:id',
		{
			schema: {
				tags: ['messaging'],
				security: [{ bearerAuth: [] }],
				params: {
					id: Type.String()
				}
			}
		},
		async (req, _res) => {
			return await fastify.prisma.message.findOne({
				where: {
					id: req.params.id
				}
			});
		}
	);

	fastify.put<{ Params: { id: string }; Body: CreateOrUpdate }>(
		'/messaging/:id',
		{
			schema: {
				tags: ['messaging'],
				security: [{ bearerAuth: [] }],
				params: {
					id: Type.String()
				},
				body: createOrUpdate
			}
		},
		async (req, _res) => {
			const { replyId, message } = req.body;

			return await fastify.prisma.message.update({
				where: {
					id: req.params.id
				},
				data: {
					replyId,
					message,
					userId: req.user.id
				}
			});
		}
	);

	fastify.delete<{ Params: { id: string } }>(
		'/messaging/:id',
		{
			schema: {
				tags: ['messaging'],
				security: [{ bearerAuth: [] }],
				params: {
					id: Type.String()
				}
			}
		},
		async (req, _res) => {
			return await fastify.prisma.message.delete({
				where: {
					id: req.params.id
				}
			});
		}
	);
};

export default messaging;
