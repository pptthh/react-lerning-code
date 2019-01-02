import { LOG_WARNING, LOG_ERROR } from "../../utils";
import Movies from "./movie";
import NetUtils from "../../utils/NetUtils";

export interface FetchPanelProps {
    success?: (data: Movies) => void;
    fauil?: (... msg: unknown[]) => void;
    request: string;
}
const FetchMovies = ({success = LOG_WARNING, fauil = LOG_ERROR, request}: FetchPanelProps) => {
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
    .then(data => success(data))
    .catch(e => (fauil(e), e));
};

export default FetchMovies;
