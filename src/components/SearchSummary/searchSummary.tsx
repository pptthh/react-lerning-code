import * as React from 'react';
import SortBy from './sortBy';
import RadioBar from '../RadioBar/radioBar';

export interface SearchSummaryProps {
    resultCount: number;
    resultSort: SortBy;
}
export interface SearchSummaryAction {
    changeSortBy: (e: unknown) => void;
}
const moviesFound: React.SFC<number> = (n:number) =>
n === 1 ? <>1 movie found</> :
<>{n} movies found</>;

const SearchSummary: React.SFC<SearchSummaryProps & SearchSummaryAction> = ({
    resultCount,
    resultSort,
    changeSortBy,
}: SearchSummaryProps & SearchSummaryAction) =>
!resultCount ? <div className='SearchSummary'/> :
<div className='SearchSummary'>
    <div
        className='movies-found'>
        {moviesFound(resultCount)}
    </div>
    <div>
        Sort by
        <RadioBar
            name='SearchSummaryResultSort'
            className='sort-by'
            onChange={changeSortBy}
            selected={resultSort}
            labels={[
                SortBy.RELEASE_DATE,
                SortBy.RATING,
            ]}
        />
    </div>
</div>;

export default SearchSummary;
