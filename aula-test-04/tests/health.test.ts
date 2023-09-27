import server from "index";
import supertest from "supertest";

describe("Testando a rota /health", () => {
  it('Deve retornar status 200 e a mensagem "OK!"', async () => {
    const response = await supertest(server).get("/health");
    expect(response.status).toBe(200);
    expect(response.text).toBe("OK!");
  });

  afterAll(() => {
    server.close();
  });
});
