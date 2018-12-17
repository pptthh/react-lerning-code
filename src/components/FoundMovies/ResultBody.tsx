import * as React from 'react';
import ResultItem, { ResultItemProps } from './ResultItem';

const ResultsBody: React.SFC<{result:ResultItemProps[]}> = ({result}: {result:ResultItemProps[]}) =>
<div className='ResultsBody'>
    {result.map(item => ResultItem(item))}
</div>;

export default ResultsBody;