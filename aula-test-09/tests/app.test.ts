import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";
import { createUser } from "repository";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const userData = {
      email: "test@example.com",
      password: "123456",
    };

    const response = await api.post("/users").send(userData);

    expect(response.status).toBe(201);
    expect(response.body.email).toBe(userData.email);
  });

  it("should receive 409 when trying to create two users with the same email", async () => {
    const userData = {
      email: "test@example.com",
      password: "123456",
    };

    await createUser(userData);

    const response = await api.post("/users").send(userData);

    expect(response.status).toBe(409);
  });
});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const userData = {
      email: "test@example.com",
      password: "123456",
    };

    const createdUser = await createUser(userData);

    const response = await api.get(`/users/${createdUser.id}`);

    expect(response.status).toBe(200);
    expect(response.body.email).toBe(userData.email);
  });

  it("should return 404 when can't find a user by id", async () => {
    const nonExistentUserId = 9999;

    const response = await api.get(`/users/${nonExistentUserId}`);

    expect(response.status).toBe(404);
  });

  it("should return all users", async () => {
    const userData1 = {
      email: "user1@example.com",
      password: "123456",
    };

    const userData2 = {
      email: "user2@example.com",
      password: "123456",
    };

    await createUser(userData1);
    await createUser(userData2);

    const response = await api.get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });
});
