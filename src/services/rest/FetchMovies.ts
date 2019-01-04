import { LOG_WARNING, LOG_ERROR } from "../../utils";
import Movies, { validateMovies, transformMoviesData } from "./movie";
import NetUtils from "../../utils/NetUtils";
import FetchProps from "./FetchProps";

const FetchMovies = ({
    success = LOG_WARNING,
    fail = LOG_ERROR,
    request,
}: FetchProps<Movies>) => {
    const requestInit: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // 'Authorization': 'Basic ' + base64Encode('admin:admin'),
        },
    };
    
    fetch(request, requestInit)
    .then(NetUtils.checkStatus)
    .then(NetUtils.getJsonResponse)
    .then(transformMoviesData)
    .then(validateMovies)
    .then(data => success(data))
    .catch(e => (fail(e), e));
};

export default FetchMovies;
