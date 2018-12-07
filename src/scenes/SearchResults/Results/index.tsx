import * as React from 'react';
import Footer from '../../../components/Footer/footer';
import ResultsBody from './ResultBody';
import { ResultItemProps } from './ResultItem';

const Result: React.SFC<{result?:ResultItemProps[]}> = ({result}: {result?:ResultItemProps[]}) =>
<div>
    {
        result === undefined || !result.length ?
            <h1>No films found</h1> :
            <ResultsBody result={result}/>
    }
    <Footer/>
</div>;

export default Result; 