import * as React from 'react';
import Header from '../Header/header';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';

export interface SearchFormProps {
    searchField: string;
    searchBy: string;
    searchAction: () => void;
}

const SearchForm: React.SFC<SearchFormProps> = () =>
<div>
    <Header>netflixroulette</Header>
    <div>FIND YOUR MOVIE</div>
    <TextInput/>
    <div>
        <span>
            SEARCH BY
            <Button label='TITLE' onClick={console.log}/>
            <Button label='GERNE' onClick={console.log}/>
        </span>
            &nbsp;
        <span>
            <Button label='SEARCH' onClick={console.log}/>
        </span>
    </div>
</div>;

export default SearchForm;
