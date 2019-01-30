const netUtils = {
    getJsonResponse : (response: Response) => response.json(),

    checkStatus: (response: Response) => {
        if (Number.isInteger(response.status)) {
            return response;
        }
        throw Error('missing status code');
    },

    MOVIES_URL: 'http://react-cdp-api.herokuapp.com/movies',

    requestInit: {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    } as RequestInit,

    setUrlPath: (path: string) => {
        setTimeout(() => {
            !location.hash ?
                location.href = '/' + path :
                location.hash = '#/' + path;
        }, 0);
    },
};

export default netUtils;
