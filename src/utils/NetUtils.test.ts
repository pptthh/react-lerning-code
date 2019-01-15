import netUtils from './netUtils';

describe('NetUtils testing', () => {

    it('getJsonResponse', () => {
        expect(netUtils.getJsonResponse).toThrowError();
    });

    it('checkStatus', () => {
        const statusNone = {status: NaN};
        const status500 = {status: 500};
        expect(netUtils.checkStatus(status500 as Response)).toEqual(status500);
        expect(() => netUtils.checkStatus(statusNone as Response)).toThrowError();
    });
});
