import * as React from 'react';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import { ResultItemProps } from '../../components/FoundMovies/ResultItem';
import FoundMovies from '../../components/FoundMovies';
import DetailedPanel, { DetailedPanelProps } from '../../components/DetailedPanel/detailedPanelProps';
import DetailedViewState from './dvState';

export interface DetailedViewProps extends DetailedViewState {
}
interface Props extends DetailedViewState {
    // detailedPanel?: DetailedPanelAction;
    // searchResults: SearchSummaryAction;
    // results: ResultItemAction[];
}

const DetailedViewUI = (props: Props) =>
<div>
    {props.detailedPanel && <DetailedPanel {...props.detailedPanel}/>}
    {/*props.searchResults && <SearchSummary {...props.searchResults}/>/**/}
    <FoundMovies results={props.results} />
</div>;

export default DetailedViewUI;
