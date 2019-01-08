import * as React from 'react';
import ResultItem, { ResultItemFnCalls, ResultItemProps } from './resultItem';

export interface IResultsBody {
    results: ResultItemProps[];
    fnCalls: ResultItemFnCalls;
}

const ResultsBody: React.SFC<IResultsBody> = (props: IResultsBody) =>
<div className='ResultsBody'>
    {props.results.map(item => ResultItem({...item, ...props.fnCalls}))}
</div>;

export default ResultsBody;
