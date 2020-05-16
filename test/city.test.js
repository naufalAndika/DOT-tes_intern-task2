const request = require('supertest')
const app = require('../src/app')

test('Should-return-city-data', async () => {
    const response = await request(app).get('/city/search?name=Bantul')
        .send()
        .expect(200)

    expect(response.body.city_name).toEqual("Bantul")
})
