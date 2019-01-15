import { RouteComponentProps } from 'react-router';

export const dvUrlPathBase = 'film/';
export const dvUrlPath = `/${dvUrlPathBase}:id`;

interface Params {
    id: string;
}

interface DvUrlProps extends RouteComponentProps<Params> {}

export default DvUrlProps;
