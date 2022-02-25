import fastify from 'fastify';
// import { IncomingMessage, ServerResponse, Server } from 'http';
import type { PrismaClient } from 'fastify';

declare module 'fastify' {
	export interface FastifyInstance {
		authenticate: any;
		prisma: PrismaClient;
		someSupport(): string;
	}
}
