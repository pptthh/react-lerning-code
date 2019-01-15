import * as React from 'react';
import Button from '../Button/button';
import RadioBar from '../RadioBar/radioBar';
import TextInput from '../TextInput/textInput';
import searchByEnum from './searchBy';

export interface SearchFormProps {
    searchBy: searchByEnum;
    searchField: string;
    searchDisabled?: boolean;
}

export interface SearchFormFnCalls {
    searchFieldTypeAction: (e: unknown) => void;
    searchByAction: (e: unknown) => void;
    searchAction: (e: unknown) => void;
}

const SearchForm: React.SFC<SearchFormProps & SearchFormFnCalls> = ({
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
        onEnter={searchAction}
    />
    <div className='properties'>
        <span>
            SEARCH BY
            <RadioBar
                className='search-by'
                labels={[searchByEnum.TITLE, searchByEnum.GERNE]}
                onChange={searchByAction}
                selected={searchBy}
                name='radioBar'
            />
        </span>
        <Button
            className='searchButton'
            label='SEARCH'
            onClick={searchAction}
            disabled={searchDisabled}
        />
    </div>
</div>;

export default SearchForm;
