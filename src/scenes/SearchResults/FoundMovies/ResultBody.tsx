import * as React from 'react';
import ResultItem, { ResultItemProps } from './ResultItem';

const style = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'stretch',
}

const ResultsBody: React.SFC<{result:ResultItemProps[]}> = ({result}: {result:ResultItemProps[]}) =>
<div style={style}>
    {result.map(item => ResultItem(item))}
</div>;

export default ResultsBody;