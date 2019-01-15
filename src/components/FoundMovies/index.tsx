import * as React from 'react';
import Footer from '../Footer/footer';
import ResultsBody, { IResultsBody } from './resultBody';

const FoundMovies: React.SFC<IResultsBody> = (props: IResultsBody) =>
!props.results.length ? <><h1>No films found</h1><Footer/></> :
<div>
    <ResultsBody {... props}/>
    <Footer/>
</div>;

export default FoundMovies; 