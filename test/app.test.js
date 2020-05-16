const request = require('supertest')
const app = require('../src/app')

test('Should-tell-that-server-is-running', async () => {
    const response = await request(app).get('/').send().expect(200)
    expect(response.body).toEqual({status: "OK"})
})
