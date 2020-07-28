interface Response {
  token: string;
  user:{
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'dasmdkasmdkasmdkasmd',
        user: {
          name: 'Eder',
          email: 'eder@gmail.com',
        },
      });
    }, 2000);
  });
}

