import * as React from 'react';
import SearchSummary, { SearchSummaryAction, SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import SearchForm, { SearchFormActions, SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';


export interface SearchResultsUIAction {
    changeSearchBy: (e:unknown)=> void,
    changeSearchText: (e:unknown) => void,
    clickSearch: (e:unknown) => void,
    clickResults: (e:unknown) => void,
}

interface Props extends SearchResultState, SearchResultsUIAction{}

const searchResultsUI = (props: Props) =>
<div>
    <SearchForm {...props.searchForm}/>
    {props.searchResults && <SearchSummary {...props.searchResults}/>}
    <FoundMovies results={props.results} />
</div>;

export default searchResultsUI;
