import * as React from 'react';
import ResultSort from './ResultSort';
import RadioBar from '../RadioBar/radioBar';

export interface SearchSummaryProps {
    resultCount: number;
    resultSort?: ResultSort;
}

const moviesFound: React.SFC<number> = (n:number) =>
n === 1 ? <>1 movie found</> :
<>{n} movies found</>;

const SearchSummary: React.SFC<SearchSummaryProps> = ({
    resultCount,
    resultSort = ResultSort.RELEASE_DATE
}:SearchSummaryProps) =>
!resultCount ? <div className='SearchSummary'/> :
<div className='SearchSummary'>
    <div className='movies-found'>
        {moviesFound(resultCount)}
    </div>
    <div>
        Sort by
        <RadioBar
            name='SearchSummaryResultSort'
            className='sort-by'
            selected={resultSort}
            labels={[
                ResultSort.RELEASE_DATE,
                ResultSort.RATING,
            ]}
        />
    </div>
</div>;

export default SearchSummary;
