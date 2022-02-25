import { Static, Type } from '@sinclair/typebox';
import { FastifyPluginAsync } from 'fastify';

const createOrUpdate = Type.Object({
	items: Type.Array(
		Type.Object({
			name: Type.String(),
			description: Type.String(),
			source: Type.String(),
			amount: Type.Number()
		})
	),
	name: Type.String(),
	description: Type.String()
});

type CreateOrUpdate = Static<typeof createOrUpdate>;

const budget: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.addHook('onRequest', fastify.authenticate);

	fastify.get(
		'/budget',
		{
			schema: {
				tags: ['budget'],
				security: [{ bearerAuth: [] }]
			}
		},
		async (_req, _res) => {
			return await fastify.prisma.budget.findMany({
				include: {
					items: true
				}
			});
		}
	);

	fastify.post<{ Body: CreateOrUpdate }>(
		'/budget',
		{
			schema: {
				tags: ['budget'],
				body: createOrUpdate,
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async (req, _res) => {
			const { name, description, items } = req.body;

			return await fastify.prisma.budget.create({
				data: {
					name,
					description,
					userId: req.user.id,
					items: {
						create: items.map((item) => ({
							name: item.name,
							description: item.description,
							source: item.source,
							amount: item.amount
						}))
					}
				}
			});
		}
	);

	fastify.put<{ Params: { id: string }; Body: CreateOrUpdate }>(
		'/bugdet/:id',
		{
			schema: {
				tags: ['budget'],
				security: [
					{
						bearerAuth: []
					}
				],
				params: {
					id: Type.String()
				}
			}
		},
		async (req, _res) => {
			const { id } = req.params;
			const { name, description, items } = req.body;

			return await fastify.prisma.budget.update({
				where: { id },
				data: {
					name,
					description,
					items: {
						create: items.map((item) => ({
							name: item.name,
							description: item.description,
							source: item.source,
							amount: item.amount
						}))
					}
				}
			});
		}
	);

	fastify.delete<{ Params: { id: string } }>(
		'/budget/:id',
		{
			schema: {
				tags: ['budget'],
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
		async function (req, res) {
			const budget = await fastify.prisma.budget.findUnique({
				where: {
					id: req.params.id
				}
			});

			if (!budget) {
				return res.code(404).send({
					error: 'Budget not found'
				});
			}

			return budget;
		}
	);
};

export default budget;
