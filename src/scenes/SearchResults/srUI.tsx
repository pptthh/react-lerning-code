import * as React from 'react';
import SearchSummary, { SearchSummaryAction, SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import SearchForm, { SearchFormActions, SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';
import { ResultItemActions } from '../../components/FoundMovies/ResultItem';


export interface SearchResultsActions {
    searchFormActions: SearchFormActions;
    searchSummaryAction: SearchSummaryAction;
    resultsItemAction: ResultItemActions;
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
    <FoundMovies
        results={props.results}
        actions={props.resultsItemAction}
    />
</div>;

export default searchResultsUI;
