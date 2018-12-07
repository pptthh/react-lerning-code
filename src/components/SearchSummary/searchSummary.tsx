import * as React from 'react';
import Button from '../Button/button';
import ResultSort from './ResultSort';

interface SearchSummaryProps {
    resultCount: number;
    resultSort: ResultSort;
}

const moviesFound: React.SFC<number> = (n:number) =>
n === 0 ? <></> :
n === 1 ? <>1 movie found</> :
<>{n} movies found</>;

const SearchSummary: React.SFC<SearchSummaryProps> = ({resultCount}:SearchSummaryProps) =>
<div>
    {moviesFound(resultCount)}
    <div>
        Sort by
        <Button label='release date' onClick={()=>{}}/>
        <Button label='rating' onClick={()=>{}}/>
    </div>
</div>;

export default SearchSummary;
