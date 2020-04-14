import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Vinícius',
    email: 'v.f.diehl@gmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'React Js',
      'React Native',
      { title: 'JavaScript', experience: 100},
    ],
  });
  return response.json({ message: 'Hello World' });
}