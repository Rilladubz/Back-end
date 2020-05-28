const request = require('supertest');
const server = require('./server.js');
const db = require("../data/db-config");



describe("the server", () => {
    beforeEach(async () => {
        await db('to do').truncate();
    });
})


describe('GET /', () => {
    it('should return the testing env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
})

describe('GET /', () => {
    it('should return the status 200', () => {
        return request(server).get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
    })
})