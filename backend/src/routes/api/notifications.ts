import { Static, Type } from '@sinclair/typebox';
import { FastifyPluginAsync } from 'fastify';

const createOrUpdate = Type.Object({
	message: Type.String(),
	type: Type.String({
		default: 'INFO',
		enum: [
			'NEW_BUDGET',
			'NEW_TRANSACTION',
			'EDIT_TRAANSACTION',
			'EDIT_BUDGET',
			'DELETE_BUDGET',
			'DELETE_TRANSACTION',
			'INFO'
		]
	})
});

type CreateOrUpdate = Static<typeof createOrUpdate>;

const notifications: FastifyPluginAsync = async (
	fastify,
	_opts
): Promise<void> => {
	fastify.addHook('onRequest', fastify.authenticate);

	fastify.get(
		'/notifications',
		{
			schema: {
				tags: ['notifications'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (_req, _res) => {
			return await fastify.prisma.notification.findMany();
		}
	);

	fastify.post<{ Body: CreateOrUpdate }>(
		'/notifications',
		{
			schema: {
				tags: ['notifications'],
				body: createOrUpdate,
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (req, _res) => {
			const { message, type } = req.body;

			return await fastify.prisma.notification.create({
				data: {
					message,
					type,
					userId: req.user.id
				}
			});
		}
	);

	fastify.put<{ Body: CreateOrUpdate; Params: { id: string } }>(
		'/notifications/:id',
		{
			schema: {
				tags: ['notifications'],
				body: createOrUpdate,
				params: {
					id: Type.String()
				},
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (req, _res) => {
			const { message, type } = req.body;
			const { id } = req.params;

			return await fastify.prisma.notification.update({
				data: {
					message,
					type
				},
				where: {
					id
				}
			});
		}
	);

	fastify.delete<{ Params: { id: string } }>(
		'/notifications/:id',
		{
			schema: {
				tags: ['notifications'],
				params: {
					id: Type.String()
				},
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (req, _res) => {
			const { id } = req.params;
			return await fastify.prisma.notification.delete({
				where: {
					id
				}
			});
		}
	);

	fastify.get<{ Params: { id: string } }>(
		'/notifications/:id',
		{
			schema: {
				tags: ['notifications'],
				params: {
					id: Type.String()
				},
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (req, _res) => {
			const { id } = req.params;
			return await fastify.prisma.notification.findOne({
				where: {
					id
				}
			});
		}
	);
};

export default notifications;
