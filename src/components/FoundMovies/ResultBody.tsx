import * as React from 'react';
import ResultItem, { ResultItemProps, ResultItemActions } from './ResultItem';

export interface IResultsBody {
    results:ResultItemProps[],
    actions:ResultItemActions,
}

const ResultsBody: React.SFC<IResultsBody> =
(props:IResultsBody) =>
<div className='ResultsBody'>
    {props.results.map(item => ResultItem({... item, ... props.actions}))}
</div>;

export default ResultsBody;