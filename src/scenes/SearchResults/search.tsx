import * as React from 'react';
import SearchSummary, { SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import { ResultItemProps } from './FoundMovies/ResultItem';
import SearchForm, { SearchFormProps } from '../../components/SearchForm/searchForm';
import FoundMovies from './FoundMovies';

interface SearchProps {
    searchForm: SearchFormProps;
    searchResults: SearchSummaryProps;
    results: ResultItemProps[];
}

class Search extends React.Component<any, SearchProps> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            searchForm: props.searchForm,
            searchResults: props.searchResults || [],
            results: props.results,
        };
    }
  
    render() {
        return <div>
            <SearchForm {...this.state.searchForm}/>
            {this.state.searchResults && <SearchSummary {...this.state.searchResults}/>}
            <FoundMovies results={this.state.results} />
        </div>;
    }
}

export default Search;
