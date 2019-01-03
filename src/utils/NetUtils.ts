const NetUtils = {

    getJsonResponse : (response: Response) => response.json(),

    checkStatus: (response: Response) => {
        if (Number.isInteger(response.status)) {
            return response;
        }
        throw new Error('missing status code');
    },

    MOVIES:'http://react-cdp-api.herokuapp.com/movies',
};

export default NetUtils;