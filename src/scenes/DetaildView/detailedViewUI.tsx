import * as React from 'react';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import { ResultItemProps } from '../../components/FoundMovies/ResultItem';
import FoundMovies from '../../components/FoundMovies';
import DetailedPanel, { DetailedPanelProps } from '../../components/DetailedPanel/detailedPanelProps';
import DetailedViewState from './dvState';

export interface DetailedViewProps extends DetailedViewState {
    detailedPanel?: DetailedPanelProps;
    searchResults: SearchSummaryProps;
    results: ResultItemProps[];
}

const DetailedViewUI = (props: DetailedViewProps) =>
<div>
    {props.detailedPanel && <DetailedPanel {...props.detailedPanel}/>}
    {props.searchResults && <SearchSummary {...props.searchResults}/>}
    <FoundMovies results={props.results} />
</div>;

export default DetailedViewUI;
