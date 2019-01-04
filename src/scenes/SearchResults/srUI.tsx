import * as React from 'react';
import SearchSummary, { SearchSummaryAction } from '../../components/SearchSummary/searchSummary';
import SearchForm, { SearchFormActions } from '../../components/SearchForm/searchForm';
import FoundMovies from '../../components/FoundMovies';
import SearchResultState from './srState';
import { ResultItemActions } from '../../components/FoundMovies/ResultItem';
import { Provider } from 'react-redux';
import store from '../Root/rootStore';
import DetailedView from '../DetaildView/dvConnect';
import Header from '../../components/Header/header';
import Button from '../../components/Button/button';


export interface srUIActions {
    searchFormActions: SearchFormActions;
    searchSummaryAction: SearchSummaryAction;
    resultsItemAction: ResultItemActions;
}

const searchResultsUI = (props: SearchResultState & srUIActions) =>
<div>
    <Header>
        netflixroulette
        {!props.details ? <></> :
            <Button
                className='showSearch'
                tooltip='Show Search Form'
                label='SEARCH'
                onClick={() => props.resultsItemAction.itemClick(0)}
            />
        }
    </Header>
    {props.details ?
        <Provider store={store}>
            <DetailedView />
        </Provider> :
        <SearchForm 
            {...props.searchForm}
            {...props.searchFormActions}
        />
    }

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
