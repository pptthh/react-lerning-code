import * as React from 'react';
import { DBG, LOG, NOOP } from '../../utils';
import UrlProps from './urlProps';
import UrlState from './urlState';

export interface UrlUiFnCalls {
    queryNotMatch: (s: string) => void;
    filmIdNotMatch: (id: string) => void;
}

const urlUI: React.SFC<UrlState & UrlUiFnCalls> = (props) =>
<>
{LOG('UrlState & UrlUiFnCalls:', props)}
{props.query ? props.queryNotMatch(props.match.params.query) : NOOP()}
{props.id ? props.filmIdNotMatch(props.match.params.id) : NOOP()}
</>;

export default urlUI;
