import 'fastify-jwt';

declare module 'fastify-jwt' {
	interface FastifyJWT {
		payload: { id: string }; // payload type is used for signing and verifying
	}
}
