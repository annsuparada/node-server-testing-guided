const request = require('supertest');
const server = require('./server.js');


describe('server.js', () => {
    describe('GET /', () => {
        it('return 200 OK', () => {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })
        it("should return { api: 'up' }", async () => {
            const res = await request(server).get('/');
            expect(res.body.api).toBe('up');
            expect(res.body).toEqual({ api: 'up' })
        })

        it('return JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                    done()
                })
        })
    })
})