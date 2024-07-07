const request = require('supertest');
const app = require('../src/app'); // Adjust the path to where your express app is exported

describe('GET /', () => {
  it('responds with Hello World from node', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World from node');
  });
});

