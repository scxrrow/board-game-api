import { config } from 'dotenv';

config({ path: '.env' });

export const jwtConstants = {
  secret: process.env.JWT_SECRET as string,
};