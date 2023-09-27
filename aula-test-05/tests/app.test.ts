import supertest from "supertest";

import app, { fibonacciSequence } from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });

  it("should return fibonacci for valid params /fibonacci", async () => {
    const numElements = 10;
    const response = await api.get(`/fibonacci?elements=${numElements}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(fibonacciSequence(numElements));
  });

  it("should return 400 for invalid params /fibonacci", async () => {
    const numElements = "invalid";
    const response = await api.get(`/fibonacci?elements=${numElements}`);

    expect(response.status).toBe(400);
  });
});
