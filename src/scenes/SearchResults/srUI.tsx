import * as React from 'react';
import SearchSummary, { SearchSummaryAction, SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import SearchForm, { SearchFormActions, SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';


export interface SearchResultsActions {
    searchFormActions: SearchFormActions;
    searchSummaryAction: SearchSummaryAction;
    // changeSearchBy: (e:unknown)=> void,
    // changeSearchText: (e:unknown) => void,
    // clickSearch: (e:unknown) => void,
    // clickResults: (e:unknown) => void,
}

const searchResultsUI = (props: SearchResultState & SearchResultsActions) =>
<div>
    <SearchForm 
        {...props.searchForm}
        {...props.searchFormActions}
    />
    {props.searchSummary && <SearchSummary
        {...props.searchSummary}
        {...props.searchSummaryAction}
    />}
    <FoundMovies results={props.results} />
</div>;

export default searchResultsUI;
