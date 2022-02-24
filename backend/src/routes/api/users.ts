import { FastifyPluginAsync } from 'fastify';
// import errors from 'http-errors';
// import { Static, Type } from '@sinclair/typebox';
// import bcrypt from 'bcryptjs';

// const user = Type.Object({
// 	name: Type.String(),
// 	password: Type.String(),
// 	email: Type.String({ format: 'email' })
// });

// type UserType = Static<typeof user>;

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
			return await fastify.prisma.user.findMany();
		}
	);
};

export default users;
