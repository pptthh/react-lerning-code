import { Response } from 'express';
// tslint:disable-next-line
const http = require('http');
const PORT = process.env.port || '8888';
const SERVER_URL = `http://localhost:${PORT}`;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_ERROR = 400;

describe('Node Server Test', () => {
    it(`should return less then 400 on: ${SERVER_URL}`, done => {
        http.get(SERVER_URL, (res: Response) => {
            expect(res.statusCode).toBeLessThan(HTTP_STATUS_ERROR);
            // expect(res.statusCode).toEqual(HTTP_STATUS_OK);
            done();
        });
    });
});
