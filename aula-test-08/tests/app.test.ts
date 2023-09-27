import supertest from "supertest";

import app from "./../src/app";
import { ReservationInput } from "../src/repository";

const api = supertest(app);

describe("API test", () => {
  let reservationId: string;

  it("should create a reservation", async () => {
    const reservation: ReservationInput = {
      startDate: new Date(),
      endDate: new Date(),
    };

    const { status, body } = await api.post("/reservations").send(reservation);
    expect(status).toBe(201);
    expect(body).toHaveProperty("id");
    reservationId = body.id;
  });

  it("should return all reservations", async () => {
    const { status, body } = await api.get("/reservations");
    expect(status).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body).toHaveLength(1);
    expect(body[0].id).toBe(reservationId);
  });
});
