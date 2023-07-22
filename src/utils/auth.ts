import { hash, compare } from "bcrypt";
const SALT_ROUNDS = 10;

export const generateHash = async (password: string): Promise<string> => {
  return await hash(password, SALT_ROUNDS);
};

export const compareHash = async (
  plain: string,
  hashed: string
): Promise<boolean> => {
  return await compare(plain, hashed);
};