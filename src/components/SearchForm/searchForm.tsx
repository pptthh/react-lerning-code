import * as React from 'react';
import Header from '../Header/header';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';
import RadioBar from '../RadioBar/radioBar';
import SearchBy from './searchBy';

export interface SearchFormProps {
    searchBy: SearchBy;
    searchField: string;
    searchDisabled?: boolean;
}

export interface SearchFormActions {
    searchFieldTypeAction: (e: unknown) => void;
    searchByAction: (e: unknown) => void;
    searchAction: (e: unknown) => void;
}

const SearchForm: React.SFC<SearchFormProps & SearchFormActions> = ({
    searchBy,
    searchField,
    searchDisabled = false,
    searchFieldTypeAction,
    searchByAction,
    searchAction,
}) =>
<div className='SearchForm'>
    <div>FIND YOUR MOVIE</div>
    <TextInput
        value={searchField}
        className='search-input-field'
        placeholder='search'
        onChange={searchFieldTypeAction}
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
        <Button label='SEARCH' onClick={searchAction} disabled={searchDisabled}/>
    </div>
</div>;

export default SearchForm;
