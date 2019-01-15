import { RouteComponentProps } from 'react-router';

export const srUrlPathBase = 'search/';
export const srUrlPath = `/${srUrlPathBase}:query?`;

interface Params {
    query: string;
}

interface SrUrlProps extends RouteComponentProps<Params> {}

export default SrUrlProps;
