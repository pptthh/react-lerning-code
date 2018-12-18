import * as React from 'react';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import { ResultItemProps } from '../../components/FoundMovies/ResultItem';
import SearchForm, { SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';

interface Props extends SearchResultState {
    searchForm: SearchFormProps;
    searchResults: SearchSummaryProps;
    results: ResultItemProps[];
}

const searchResultsUI = (props: Props) =>
<div>
    <SearchForm {...props.searchForm}/>
    {props.searchResults && <SearchSummary {...props.searchResults}/>}
    <FoundMovies results={props.results} />
</div>;

export default searchResultsUI;
