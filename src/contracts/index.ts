import { initContract } from '@ts-rest/core';
import { authContract } from '@/contracts/auth';

const c = initContract();

export const mainContract = c.router({
  auth: authContract
});
