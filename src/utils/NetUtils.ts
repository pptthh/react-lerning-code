const netUtils = {

    getJsonResponse : (response: Response) => response.json(),

    checkStatus: (response: Response) => {
        if (Number.isInteger(response.status)) {
            return response;
        }
        throw Error('missing status code');
    },

    MOVIES_URL: 'http://react-cdp-api.herokuapp.com/movies',
};

export default netUtils;
