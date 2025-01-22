import { initServer } from '@ts-rest/express';
import { mainContract } from '@/contracts';
import * as authController from '@/controllers/auth';

const s = initServer();

const router = s.router(mainContract, {
  auth: authController
});

export default router;
