import * as React from 'react';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import { ResultItemProps } from '../../components/FoundMovies/ResultItem';
import FoundMovies from '../../components/FoundMovies';
import DetailedPanel, { DetailedPanelProps } from '../../components/DetailedPanel/detailedPanelProps';

interface DetailedViewProps {
    detailedPanel?: DetailedPanelProps;
    searchResults: SearchSummaryProps;
    results: ResultItemProps[];
}

class DetailedView extends React.Component<any, DetailedViewProps> {
    constructor(props: DetailedViewProps) {
        super(props);
        this.state = {
            detailedPanel: props.detailedPanel,
            searchResults: props.searchResults || [],
            results: props.results,
        };
    }
  
    render() {
        return <div>
            {this.state.detailedPanel && <DetailedPanel {...this.state.detailedPanel}/>}
            {this.state.searchResults && <SearchSummary {...this.state.searchResults}/>}
            <FoundMovies results={this.state.results} />
        </div>;
    }
}

export default DetailedView;
