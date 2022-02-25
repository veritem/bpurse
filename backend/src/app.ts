import { AutoloadPluginOptions } from 'fastify-autoload';
import { FastifyPluginAsync } from 'fastify';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { join } from 'desm';

export type AppOptions = {
	// Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

const app: FastifyPluginAsync<AppOptions> = async (
	fastify,
	opts
): Promise<void> => {
	fastify.decorate(
		'authenticate',
		async function (request: FastifyRequest, reply: FastifyReply) {
			const token = request.headers['authorization']?.split(' ')[1];
			if (!token) {
				reply.send({
					status: false,
					message: 'No token provided.'
				});
				return;
			}
			try {
				const decoded: { id: string } = fastify.jwt.verify(token);

				const user = await fastify.prisma.user.findUnique({
					where: {
						id: decoded.id
					}
				});

				if (user) {
					request.user = user;
				}
			} catch (err) {
				reply.send({
					status: false,
					message: 'Invalid token.'
				});
			}
		}
	);

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
