import { DetailedPanelProps } from "../../components/DetailedPanel/detailedPanelProps";
import { SearchSummaryProps } from "../../components/SearchSummary/searchSummary";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";

interface DetailedViewState {
    detailedPanel?: DetailedPanelProps;
    // searchResults: SearchSummaryProps;
    results: ResultItemProps[];

}
export default DetailedViewState;