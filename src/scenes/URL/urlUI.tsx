import * as React from 'react';
import { DBG } from '../../utils';
import UrlProps from './urlProps';
import UrlState from './urlState';

export interface UrlUiFnCalls {
    queryNotMatch: (s: string) => void;
    filmIdNotMatch: (id: string) => void;
}

const urlUI: React.SFC<UrlState & UrlUiFnCalls> =
(props: UrlState & UrlUiFnCalls) =>
DBG() ? <div>url</div> : <></>;

export default urlUI;
