const NetUtils = {

    getJsonResponse : (response: Response) => response.json(),

    checkStatus: (response: Response) => {
        if (Number.isInteger(response.status)) {
            return response;
        }
        throw new Error('missing status code');
    }
};

export default NetUtils;