import { Static, Type } from '@sinclair/typebox';
import { FastifyPluginAsync } from 'fastify';

const createOrUpdate = Type.Object({
	name: Type.String(),
	amount: Type.Number(),
	userId: Type.String(),
	budgetId: Type.String(),
	status: Type.String({
		default: 'PENDING',
		enum: ['PENDING', 'APPROVED', 'REJECTED']
	})
});

type CreateOrUpdate = Static<typeof createOrUpdate>;

const transactions: FastifyPluginAsync = async (
	fastify,
	_opts
): Promise<void> => {

	fastify.addHook('onRequest', fastify.authenticate);
	fastify.get(
		'/transactions',
		{
			schema: {
				tags: ['transactions'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (_request, _reply) => {
			return await fastify.prisma.transactions.findMany();
		}
	);

	fastify.delete<{ Params: { id: string } }>(
		'/transactions/:id',
		{
			schema: {
				tags: ['transactions'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (request, _reply) => {
			const { id } = request.params;
			return await fastify.prisma.transactions.delete({
				where: {
					id
				}
			});
		}
	);

	fastify.put<{ Params: { id: string }; Body: CreateOrUpdate }>(
		'/transactions/:id',
		{
			schema: {
				tags: ['transactions'],
				body: createOrUpdate,
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (request, _reply) => {
			const { name, amount, budgetId, status } = request.body;

			// const { description } = request.body;
			return await fastify.prisma.transactions.update({
				where: {
					name,
					userId: request.user.id,
					budgetId,
					amount,
					status
				},
				data: {}
			});
		}
	);

	fastify.post<{ Body: CreateOrUpdate }>(
		'/transactions',
		{
			schema: {
				tags: ['transactions'],
				security: [
					{
						bearerAuth: []
					}
				],
				body: createOrUpdate
			}
		},
		async (request, _reply) => {
			const { name, amount, budgetId, status } = request.body;
			return await fastify.prisma.transactions.create({
				data: {
					name,
					userId: request.user.id,
					budgetId,
					amount,
					status
				}
			});
		}
	);
};

export default transactions;
