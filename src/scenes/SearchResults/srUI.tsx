import * as React from 'react';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemFnCalls } from '../../components/FoundMovies/resultItem';
import Header from '../../components/Header/header';
import SearchForm, { SearchFormFnCalls } from '../../components/SearchForm/searchForm';
import SearchSummary, { SearchSummaryAction } from '../../components/SearchSummary/searchSummary';
import SearchResultState from './srState';
import SrUrlProps from './srUrlProps';

export interface SrUiFnCalls {
    searchFormActions: SearchFormFnCalls;
    searchSummaryAction: SearchSummaryAction;
    resultsItemAction: ResultItemFnCalls;
}

const searchResultsUI = (props: SearchResultState & SrUiFnCalls & SrUrlProps) =>
<>
    <Header>
        netflixroulette
    </Header>
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
        fnCalls={props.resultsItemAction}
    />
</>;

export default searchResultsUI;

/*
props.details ?
<>
    <Header>
    netflixroulette
        <Button
            className='showSearch'
            tooltip='Show Search Form'
            label='SEARCH'
            onClick={() => props.resultsItemAction.itemClick(0)}
        />
    </Header>
    <Provider store={store}>
        <DetailedView />
    </Provider>
</> :

*/
