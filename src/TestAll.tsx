import * as React from 'react';
import TestElement from './TestItem';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import NoResult from './scenes/SearchResults/NoResults';

const TestAll:React.SFC<object> = () =>
<div className="App">
    <header className="App-title">
        <h1>Welcome to Movie search test component page</h1>
    </header>
    <TestElement name='button'>
        <Button label='Button' onClick={console.log}></Button>
        <Label>simple label</Label>
        <Header>Component Header Test</Header>
        <Footer/>
        <NoResult/>
    </TestElement>
</div>;

export default TestAll;