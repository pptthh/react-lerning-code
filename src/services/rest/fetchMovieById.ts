
import { LOG_ERROR, LOG_WARNING, NOOP, TEST } from '../../utils';
import fetchAPI from '../../utils/fetchAPI';
import netUtils from '../../utils/netUtils';
import { FetchProps } from './fetchProps';
import { Movie } from './movie';

const FetchMovieById = ({
    success = LOG_WARNING,
    fail = LOG_ERROR,
    request,
}: FetchProps<Movie>) => {
    // fix me: remove next line find a solutom to testing Reducers
    TEST ? NOOP() :
    fetchAPI(request, netUtils.requestInit)
    .then(netUtils.checkStatus)
    .then(netUtils.getJsonResponse)
    .then(success)
    .catch((e: unknown) => (fail(e), e));
};

export default FetchMovieById;
