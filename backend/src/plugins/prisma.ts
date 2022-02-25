import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import pkg from '@prisma/client';

const prismaPlugin: FastifyPluginAsync = fp(async (server, _opts) => {
	const { PrismaClient } = pkg;

	const prisma = new PrismaClient();

	await prisma.$connect();

	server.decorate('prisma', prisma);

	server.addHook('onClose', () => {
		prisma.$disconnect();
	});
});

export default prismaPlugin;
