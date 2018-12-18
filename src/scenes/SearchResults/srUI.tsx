import * as React from 'react';
import SearchSummary, { SearchSummaryAction, SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import SearchForm, { SearchFormActions, SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';

interface Props extends SearchResultState {
    searchForm: SearchFormActions & SearchFormProps;
    searchResults: SearchSummaryAction & SearchSummaryProps;
    // results: ResultItemAction[];
}

const searchResultsUI = (props: Props) =>
<div>
    <SearchForm {...props.searchForm}/>
    {props.searchResults && <SearchSummary {...props.searchResults}/>}
    <FoundMovies results={props.results} />
</div>;

export default searchResultsUI;
