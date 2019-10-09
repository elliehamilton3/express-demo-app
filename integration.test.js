const request = require('supertest');
const app = require('./app.js')

describe('Integration test', () => {
    test('Should return 200 OK and hello world', async () => {
        const response = await request(app).get('/');
        expect(response.text).toEqual('Hello World!')
        expect(response.statusCode).toEqual(200)
    })

    test('Should return 404 if the request data is not JSON and is text', async () => {
        const response = await request(app).get('/').set('Accept', 'text/html');
        expect(response.statusCode).toEqual(404)
    })

    test('Should return 404 if the request data is not JSON and is xml', async () => {
        const response = await request(app).get('/').set('Accept', 'application/xhtml+xml');
        expect(response.statusCode).toEqual(404)
    })

    test('Should return 200 if the request data is JSON', async () => {
        const response = await request(app).get('/').set('Accept', 'application/json');
        expect(response.statusCode).toEqual(200)
    })
})