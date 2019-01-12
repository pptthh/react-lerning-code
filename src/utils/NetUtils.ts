import { EVENT_VALUE } from '.';

const netUtils = {

    getJsonResponse : (response: Response) => response.json(),

    checkStatus: (response: Response) => {
        if (Number.isInteger(response.status)) {
            return response;
        }
        throw Error('missing status code');
    },

    MOVIES_URL: 'http://react-cdp-api.herokuapp.com/movies',

    setUrlPath: (path: string) => {
        // props.history.push('/foo')
        // return;
        // !location.hash ?
        //     location.pathname = '/' + path :
        //     location.hash = '#/' + path;
    },
};

export default netUtils;
