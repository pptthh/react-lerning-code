import { RouteComponentProps } from 'react-router';

interface Params {
    query: string;
    id: string;
}

interface UrlProps extends RouteComponentProps {
    params: { [K in keyof Params]: string};
}

export default UrlProps;
