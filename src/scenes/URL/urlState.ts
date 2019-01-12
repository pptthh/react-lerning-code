import UrlProps from './urlProps';

interface UrlState {
    match: UrlProps;
    location: string;
    query?: string;
    id?: number;
}

export default UrlState;
