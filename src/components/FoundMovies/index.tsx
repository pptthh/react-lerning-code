import * as React from 'react';
import Footer from '../Footer/footer';
import ResultsBody, { IResultsBody } from './ResultBody';

const FoundMovies: React.SFC<IResultsBody> = (props: IResultsBody) =>
<div>
    {!props.results.length ? <h1>No films found</h1> :
        <ResultsBody {... props}/>
    }
    <Footer/>
</div>;

export default FoundMovies; 