import * as React from 'react';
import RadioBar from '../RadioBar/radioBar';
import sortByEnum from './sortBy';

export interface SearchSummaryProps {
    resultCount: number;
    resultSort: sortByEnum;
}
export interface SearchSummaryAction {
    changeSortBy: (e: unknown) => void;
}
const moviesFound: React.SFC<number> = (n: number) =>
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
                sortByEnum.RELEASE_DATE,
                sortByEnum.RATING,
            ]}
        />
    </div>
</div>;

export default SearchSummary;
