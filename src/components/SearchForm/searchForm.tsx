import * as React from 'react';
import Header from '../Header/header';
import TextInput from '../TextInput/textInput';
import Button from '../Button/button';

const SearchForm: React.SFC<object> = () =>
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
