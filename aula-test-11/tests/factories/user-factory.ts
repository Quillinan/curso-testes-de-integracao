import { User } from "@prisma/client";

export function createMockUser(userData: Partial<User> = {}): User {
  const defaultUserData: User = {
    id: 1,
    email: "example@example.com",
    password: "password123",
  };

  return {
    ...defaultUserData,
    ...userData,
  };
}

const user = createMockUser({ email: "test@example.com" });
console.log(user);
