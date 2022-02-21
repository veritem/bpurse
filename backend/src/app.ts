import { join } from 'path';
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import fastifySwagger from 'fastify-swagger';
// import prismaPlugin from './plugins/prisma';

export type AppOptions = {
	// Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
	fastify,
	opts
): Promise<void> => {
	// Place here your custom code!

	// Do not touch the following lines

	// This loads all plugins defined in plugins
	// those should be support plugins that are reused
	// through your application

	// fastify.register(prismaPlugin)

	fastify.register(fastifySwagger, {
		exposeRoute: true,
		openapi: {
			info: {
				title: 'bpurse api',
				description: 'bpurse api',
				version: '1.0.0'
			},
			servers: [
				{
					url: 'http://localhost:3000'
				}
			]
		},
		routePrefix: '/docs',
		hideUntagged: true
	});

	fastify.addSchema({
		$id: 'User',
		type: 'object',
		properties: {
			id: {
				type: 'string'
			},
			email: {
				type: 'string'
			},
			name: {
				type: 'string'
			},
			password: {
				type: 'string'
			},
			createdAt: {
				type: 'string'
			},
			updatedAt: {
				type: 'string'
			}
		}
	});

	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'plugins'),
		options: opts
	});

	// This loads all plugins defined in routes
	// define your routes in one of these
	void fastify.register(AutoLoad, {
		dir: join(__dirname, 'routes'),
		options: opts
	});
};

export default app;
export { app };
