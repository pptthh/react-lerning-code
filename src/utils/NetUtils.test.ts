import NetUtils from "./NetUtils";

describe('NetUtils testing', () => {

    it('getJsonResponse', () => {
        expect(NetUtils.getJsonResponse).toThrowError();
    });

    it('checkStatus', () => {
        const statusNone = {status: ''} as any;
        const status500 = {status: 500} as any;
        expect(NetUtils.checkStatus(status500)).toEqual(status500);
        expect(() => NetUtils.checkStatus(statusNone)).toThrowError();
    });
});
