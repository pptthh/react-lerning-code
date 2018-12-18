import * as React from 'react';
import Header from '../Header/header';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';
import RadioBar from '../RadioBar/radioBar';
import SearchBy from './searchBy';

export interface SearchFormProps {
    searchBy: SearchBy;
    searchField: string;
}

export interface SearchFormActions {
    searchFieldAction: (e: any) => void;
    searchByAction: (e: any) => void;
    searchAction: (e: any) => void;
}

const SearchForm: React.SFC<SearchFormProps & SearchFormActions> = ({
    searchBy,
    searchField,
    searchFieldAction,
    searchByAction,
    searchAction,
}) =>
<div className='SearchForm'>
    <Header>netflixroulette</Header>
    <div>FIND YOUR MOVIE</div>
    <TextInput
        value={searchField}
        className='search-input-field'
        placeholder='search'
        onChange={searchFieldAction}
    />
    <div className='properties'>
        <span>
            SEARCH BY
            <RadioBar
                className='search-by'
                labels={[SearchBy.TITLE, SearchBy.GERNE]}
                onChange={searchByAction}
                selected={searchBy}
                name='radioBar'
            />
        </span>
        <Button label='SEARCH' onClick={searchAction}/>
    </div>
</div>;

export default SearchForm;
