import * as React from 'react';
import resultItem, { ResultItemFnCalls, ResultItemProps } from './resultItem';

export interface IResultsBody {
    results: ResultItemProps[];
    fnCalls: ResultItemFnCalls;
}

const ResultsBody: React.SFC<IResultsBody> = (props: IResultsBody) => (
<div className='ResultsBody'>
    {props.results.map((item) => resultItem({...item, ...props.fnCalls}))}
</div>);

export default ResultsBody;
