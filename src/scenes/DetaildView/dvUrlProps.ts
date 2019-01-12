import { RouteComponentProps } from 'react-router';

export const dvUrlPath = '/film/:id';

interface Params {
    id: string;
}

interface DvUrlProps extends RouteComponentProps<Params> {}

export default DvUrlProps;
