const request = require("supertest");
const server = require("../index");


describe("user router", function () {
    it("run simple test", function () {
        expect(true).toBe(true);
    });


});

describe("POST /login", function () {
    it("Should login user", function () {
        return request(server)
            .post("/api/login")
            .send({ email: "Thursday@gmail.com", password: "Thursday" })
            .then(res => {
                const newToken = res.body.token;
                return request(server)
                    .get("/api/tasks")
                    .set(Authorization, newToken)
                    .then(res => {
                        expect(res.status).toBeTruthy();
                    });
            });

    });
});

