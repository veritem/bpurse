import { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import { join } from 'desm';

export type AppOptions = {
	// Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
	fastify,
	opts
): Promise<void> => {
	// fastify.decorate('authenticate', async function (req, resp) {
	// 	const token = request.headers['authorization'];
	// 	if (!token) {
	// 		reply.send({
	// 			status: false,
	// 			message: 'No token provided.'
	// 		});
	// 		return;
	// 	}
	// 	try {
	// 		const decoded = fastify.jwt.verify(token);
	// 		request.userId = decoded;
	// 		// reply.send({
	// 		// 	status: true,
	// 		// 	message: 'Authenticated.'
	// 		// });
	// 	} catch (err) {
	// 		reply.send({
	// 			status: false,
	// 			message: 'Invalid token.'
	// 		});
	// 	}
	// });

	// fastify.decorate('authenticate', async function (request, reply) {});

	fastify.register(import('fastify-cors'));

	fastify.register(import('fastify-jwt'), {
		secret: 'scretkey',
		sign: {
			expiresIn: '1d'
		}
	});

	fastify.register(import('fastify-swagger'), {
		exposeRoute: true,
		swagger: {
			info: {
				title: 'bpurse api',
				description: 'bpurse api',
				version: '1.0.0'
			},
			securityDefinitions: {
				bearerAuth: {
					type: 'apiKey',
					name: 'Authorization',
					in: 'header'
				}
			},
			consumes: ['application/json'],
			produces: ['application/json']
		},
		routePrefix: '/docs',
		hideUntagged: true
	});

	void fastify.register(import('fastify-autoload'), {
		dir: join(import.meta.url, 'plugins'),
		options: opts
	});

	// This loads all plugins defined in routes
	// define your routes in one of these
	void fastify.register(import('fastify-autoload'), {
		dir: join(import.meta.url, 'routes'),
		options: opts
	});
};

export default app;
export { app };
