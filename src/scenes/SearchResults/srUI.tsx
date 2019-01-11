import * as React from 'react';
import { Provider } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Button from '../../components/Button/button';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemFnCalls } from '../../components/FoundMovies/resultItem';
import Header from '../../components/Header/header';
import SearchForm, { SearchFormFnCalls } from '../../components/SearchForm/searchForm';
import SearchSummary, { SearchSummaryAction } from '../../components/SearchSummary/searchSummary';
import DetailedView from '../DetaildView/dvConnect';
import store from '../Root/rootStore';
import SearchResultState from './srState';

export interface SrUiFnCalls {
    searchFormActions: SearchFormFnCalls;
    searchSummaryAction: SearchSummaryAction;
    resultsItemAction: ResultItemFnCalls;
}

const searchResultsUI = (props: SearchResultState & SrUiFnCalls & RouteComponentProps) =>
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
