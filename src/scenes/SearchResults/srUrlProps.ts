import { RouteComponentProps } from 'react-router';

export const srUrlPath = '/search/:query?';

interface Params {
    query: string;
}

interface SrUrlProps extends RouteComponentProps<Params> {}

export default SrUrlProps;
