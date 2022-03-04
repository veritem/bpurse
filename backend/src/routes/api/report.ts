import { FastifyPluginAsync } from 'fastify';

const report: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.get<{ Params: { startDate: string; endDate: string } }>(
		'/reports/transactions/:startDate/:endDate',
		{
			schema: {
				tags: ['report'],
				params: {
					startDate: { type: 'string' },
					endDate: { type: 'string' }
				},
				security: [{ bearerAuth: [] }]
			}
		},
		async (req, _res) => {
			const { startDate, endDate } = req.params;

			return await fastify.prisma.transactions.findMany({
				where: {
					createdAt: {
						gte: startDate,
						lte: endDate
					}
				}
			});
		}
	);

	fastify.get<{ Params: { startDate: string; endDate: string } }>(
		'/reports/budget/:startDate/:endDate',
		{
			schema: {
				tags: ['report'],
				params: {
					startDate: { type: 'string' },
					endDate: { type: 'string' }
				},
				security: [{ bearerAuth: [] }]
			}
		},
		async (req, _res) => {
			const { startDate, endDate } = req.params;

			return await fastify.prisma.budget.findMany({
				where: {
					createdAt: {
						gte: startDate,
						lte: endDate
					}
				}
			});
		}
	);
};

export default report;
