import { FastifyPluginAsync } from 'fastify';
import errors from 'http-errors';
import { Static, Type } from '@sinclair/typebox';
// import { User } from '@prisma/client';
// type UserType = Static<typeof user>;
import bcrypt from 'bcryptjs';

const login = Type.Object({
	email: Type.String({ format: 'email' }),
	password: Type.String()
});

const loginResponse = Type.Object({
	token: Type.String()
});

const register = Type.Object({
	name: Type.String(),
	email: Type.String({ format: 'email' }),
	password: Type.String()
});

type Register = Static<typeof register>;

const auth: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.get(
		'/auth/me',
		{
			schema: {
				tags: ['auth'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async function (_req, _resp) {
			return { root: true };
		}
	);

	fastify.get(
		'/auth/logout',
		{
			schema: {
				tags: ['auth'],
				security: [
					{
						bearerAuth: []
					}
				]
			}
		},
		async function (_req, _resp) {
			return { root: true };
		}
	);

	fastify.post<{ Body: Register }>(
		'/auth/register',
		{
			schema: {
				tags: ['auth'],
				description: 'Register a new user',
				body: register
			}
		},
		async function (req, _resp) {
			const { name, email, password } = req.body;

			const userExists = await fastify.prisma.user.findUnique({
				where: { email }
			});

			if (userExists) {
				throw new errors.BadRequest('User already exists');
			}

			const hashedPassword = await bcrypt.hash(password, 10);
			return await fastify.prisma.user.create({
				data: {
					name,
					email,
					password: hashedPassword
				}
			});
		}
	);

	fastify.post<{
		Body: Static<typeof login>;
		Reply: Static<typeof loginResponse>;
	}>(
		'/login',
		{
			schema: {
				tags: ['auth'],
				description: 'login',
				body: login
			}
		},
		async function (req, _resp) {
			let { email, password } = req.body;

			let user = await fastify.prisma.user.findFirst({
				where: {
					email
				}
			});

			if (!user) {
				throw new errors.BadRequest('Invalid email or password');
			}

			const valid = await bcrypt.compare(password, user.password);

			if (!valid) {
				throw new errors.BadRequest('Invalid email or password');
			}

			let token = fastify.jwt.sign({
				id: user.id
			});

			return {
				token,
				user
			};
		}
	);
};

export default auth;
