import request from 'supertest';
import app from "./app";

describe('GET /', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('responds with JSON data', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  });
});
