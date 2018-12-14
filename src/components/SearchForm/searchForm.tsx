import * as React from 'react';
import Header from '../Header/header';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';
import RadioBar from '../RadioBar/radioBar';
import ResultSort from '../SearchSummary/ResultSort';

export interface SearchFormProps {
    searchField: string;
    searchBy: string;
    searchAction: () => void;
}

const SearchForm: React.SFC<SearchFormProps> = () =>
<div>
    <Header>netflixroulette</Header>
    <div>FIND YOUR MOVIE</div>
    <TextInput
        className='search-input-field'
        placeholder='search'
    />
    <div>
        <span>
            SEARCH BY
            <RadioBar
                className='movie-sort-by'
                labels={[ResultSort.RELEASE_DATE, ResultSort.RATING]}
                selected={ResultSort.RELEASE_DATE}
                name='radioBar'                
            />
        </span>
            &nbsp;
        <span className='search-button'>
            <Button label='SEARCH' onClick={console.log}/>
        </span>
    </div>
</div>;

export default SearchForm;
