import {
  AppRoute,
  ServerInferRequest,
  ServerInferResponses,
  initContract
} from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const login = {
  method: 'POST',
  path: '/login',
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  }),
  responses: {
    200: z.object({
      message: z.string(),
      token: z.string()
    })
  },
  summary: 'Login to the application',
  description: 'Login to the application, returns a token'
} satisfies AppRoute;

const register = {
  method: 'POST',
  path: '/register',
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8)
  }),
  responses: {
    200: z.object({
      message: z.string()
    })
  },
  summary: 'Register to the application',
  description: 'Register to the application, returns a token'
} satisfies AppRoute;

export const authContract = c.router({
  login,
  register
}, {
  pathPrefix: '/auth'
});

export type AuthContractRequest = ServerInferRequest<typeof authContract>;
export type AuthContractResponse = ServerInferResponses<typeof authContract>;
