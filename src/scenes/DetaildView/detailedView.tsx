import * as React from 'react';
import DetailedPanel from './DetailedPanel/detailedPanelProps';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';

interface DetailedViewProps {
    detailedPanel?: DetailedViewProps;
    searchResults?: SearchSummaryProps
}

class DetailedView extends React.Component {
    constructor(props: DetailedViewProps) {
        super(props);
        this.state = {
            detailedPanel: props.detailedPanel,
            searchResults: props.searchResults,
        };
    }
  
    render() {
        return <div>
            <label>detailedPanel</label>
            <br/>
            {/* {this.state.detailedPanel && <DetailedPanel {... this.state.detailedPanel}/>}
            {this.state.searchResults && <SearchSummary {... this.state.searchResults}/>} */}
            <label>searchResults</label>
        </div>;
    }
}

export default DetailedView;
