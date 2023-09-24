import request from "supertest";
import server from "nextjs-http-supertest";

describe("project api endpoint tests", () => {
  afterAll(() => {
    server.close();
  });

  it("200: Should return a projects array", async () => {
    const response = await request(server).get("/api/project");
    expect(response.statusCode).toEqual(200);
    response.body.forEach((project: any) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("name");
      expect(project).toHaveProperty("country");
      expect(project).toHaveProperty("image");
      expect(project).toHaveProperty("pricePerTon");
      expect(project).toHaveProperty("volumeInTon");
      expect(project).toHaveProperty("distributionWeight");
      expect(project).toHaveProperty("supplierName");
      expect(project).toHaveProperty("earliestDelivery");
      expect(project).toHaveProperty("description");
    });
  });
});
