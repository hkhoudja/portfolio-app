import request from "supertest";
import server from "nextjs-http-supertest";

describe("project api endpoint tests", () => {
  afterAll(() => {
    server.close();
  });

  const expectedProjectSchema = {
    id: expect.any(String),
    name: expect.any(String),
    country: expect.any(String),
    image: expect.any(String),
    pricePerTon: expect.any(Number),
    volumeInTon: expect.any(Number),
    distributionWeight: expect.any(Number),
    supplierName: expect.any(String),
    earliestDelivery: expect.any(Date),
    description: expect.any(String),
  }

  it("200: Should return a projects array", async () => {
    const response = await request(server).get("/api/project");
    expect(response.statusCode).toEqual(200);
    response.body.forEach((project: any) => {
        expect.objectContaining(expectedProjectSchema);
    });
  });
});
