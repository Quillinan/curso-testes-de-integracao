import { faker } from "@faker-js/faker";
import { UserInput } from "../../src/repository";

export async function buildUser(email?: string, password?: string) {
  const userData: UserInput = {
    email: email || faker.internet.email(),
    password: password || faker.internet.password(),
  };

  return userData;
}
