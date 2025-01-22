import { AuthContractRequest, AuthContractResponse } from '@/contracts/auth';

export const login = async ({ body }: AuthContractRequest['login']): Promise<AuthContractResponse['login']> => {
  const { email, password } = body;
  console.log(email, password);
  return {
    status: 200,
    body: {
      message: 'SUCCESS',
      token: '123'
    }
  };
};

export const register = async ({ body }: AuthContractRequest['register']): Promise<AuthContractResponse['register']> => {
  const { email, password } = body;
  console.log(email, password);
  return {
    status: 200,
    body: {
      message: 'SUCCESS'
    }
  };
};
