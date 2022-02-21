import { FastifyPluginAsync } from 'fastify';
import errors from 'http-errors';
import { Static, Type } from '@sinclair/typebox';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

const user = Type.Object({
	name: Type.String(),
	password: Type.String(),
	email: Type.String({ format: 'email' })
});

const login = Type.Object({
	email: Type.String({ format: 'email' }),
	password: Type.String()
});

const loginResponse = Type.Object({
	token: Type.String(),
	user: user
});

type UserType = Static<typeof user>;

const users: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
	fastify.get(
		'/',
		{
			schema: {
				tags: ['users'],
				summary: 'Get all users',
				description: 'Get all users'
			}
		},
		async function (_request, _reply) {
			let users = await fastify.prisma.user.findMany();
			console.log({ users });
			return users;
		}
	);

	fastify.post<{
		Body: Static<typeof login>;
		Reply: Static<typeof loginResponse>;
	}>(
		'/login',
		{
			schema: {
				tags: ['users'],
				summary: 'Login',
				description: 'Login',
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

			//TODO: Generate token
			let token = '';
			return {
				token,
				user
			};
		}
	);

	fastify.post<{ Body: UserType; Reply: User }>(
		'/register',
		{
			schema: {
				tags: ['users'],
				body: user,
				// body: UserType,
				response: {
					// 200: User
				}
			}
		},
		async function (req, _res) {
			const { email, password, name } = req.body;

			if (!email || !password || !name) {
				throw new errors.BadRequest('Missing required fields');
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const user = await fastify.prisma.user.create({
				data: {
					email,
					password: hashedPassword,
					name
				}
			});

			return user;
		}
	);
};

export default users;
