import * as React from 'react';
import TestElement from './TestItem';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Result from './scenes/SearchResults/Results';
import { ResultItemProps } from './scenes/SearchResults/Results/ResultItem';

const getId = () => Math.random();
const filmResult: ResultItemProps[] = [
    {title:'Title', date: '2000', gerne:'Action', key:getId()},
    {title:'Title 1', date: '2001', gerne:'Drama', key:getId()},
    {title:'Title 2', date: '2002', gerne:'Action', key:getId(), src:''},
];

const TestAll:React.SFC<object> = () =>
<div className="App">
    <header className="App-title">
        <h1>Welcome to Movie search test component page</h1>
    </header>
    <TestElement name='button'>
        <Result result={filmResult}/>
        <Result />
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={console.log}></Button>
    </TestElement>
</div>;

export default TestAll; 