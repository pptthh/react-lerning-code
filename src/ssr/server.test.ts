import { Response } from 'express';
// tslint:disable-next-line
const http = require('http');

const SERVER_URL = 'http://127.0.0.1:8888';
const HTTP_STATUS_OK = 200;

describe('Node Server Test', () => {
  it('should return 200', done => {
    http.get(SERVER_URL, (res: Response) => {
        expect(res.statusCode).toEqual(HTTP_STATUS_OK);
        done();
    });
  });
});
