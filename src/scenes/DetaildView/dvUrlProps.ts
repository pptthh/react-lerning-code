import { RouteComponentProps } from 'react-router';

export const dvUrlPath = '/film/:id';

interface Params {
    id: string;
}

interface DvUrlProps extends RouteComponentProps {
    params: { [K in keyof Params]: string};
}

export default DvUrlProps;
