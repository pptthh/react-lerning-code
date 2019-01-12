import * as React from 'react';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemFnCalls } from '../../components/FoundMovies/resultItem';
import Header from '../../components/Header/header';
import SearchForm, { SearchFormFnCalls } from '../../components/SearchForm/searchForm';
import SearchSummary, { SearchSummaryAction } from '../../components/SearchSummary/searchSummary';
import SearchResultState from './srState';
import SrUrlProps from './srUrlProps';
import { Redirect } from 'react-router';

export interface SrUiFnCalls {
    searchMatchQuery: (props: SearchResultState & SrUiFnCalls & SrUrlProps) => boolean;
    searchFormActions: SearchFormFnCalls;
    searchSummaryAction: SearchSummaryAction;
    resultsItemAction: ResultItemFnCalls;
}

const srUI: React.SFC<SearchResultState & SrUiFnCalls & SrUrlProps> =
(props) =>
// !props.searchMatchQuery(props) ? <></> :
<>
    <Header>
        netflixroulette
    </Header>

    {props.searchMatchQuery(props)}
    <SearchForm
        {...props.searchForm}
        {...props.searchFormActions}
    />

    <SearchSummary
        {...props.searchSummary}
        {...props.searchSummaryAction}
    />

    <FoundMovies
        results={props.results}
        fnCalls={props.resultsItemAction}
    />
</>;

export default srUI;
