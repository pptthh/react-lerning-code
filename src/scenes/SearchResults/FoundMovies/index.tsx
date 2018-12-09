import * as React from 'react';
import Footer from '../../../components/Footer/footer';
import ResultsBody from './ResultBody';
import { ResultItemProps } from './ResultItem';

const FoundMovies: React.SFC<{results:ResultItemProps[]}> = ({results}: {results:ResultItemProps[]}) =>
<div>
    {
        results === undefined || !results.length ?
            <h1>No films found</h1> :
            <ResultsBody result={results}/>
    }
    <Footer/>
</div>;

export default FoundMovies; 