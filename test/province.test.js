const request = require('supertest')
const app = require('../src/app')

test('Should-return-province-data', async () => {
    const response = await request(app).get('/province/search?name=Bali')
        .send()
        .expect(200)

    expect(response.body.province).toEqual("Bali")
})
