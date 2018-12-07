import * as React from 'react';
import TestElement from './TestItem';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Result from './scenes/SearchResults/Results';
import { ResultItemProps } from './scenes/SearchResults/Results/ResultItem';
import SearchForm from './components/SearchForm/searchForm';
import SearchSummary from './components/SearchSummary/searchSummary';
import ResultSort from './components/SearchSummary/ResultSort';

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
    <TestElement name='Search Box'>
        <SearchForm/>
        <hr></hr>
        <SearchSummary
            resultCount={filmResult.length}
            resultSort={ResultSort.RELEASE_DATE}
        />
        <hr></hr>
    </TestElement>
    <TestElement name='Search result examples'>
        <Result result={filmResult}/>
        <Result />
    </TestElement>
    <TestElement name='components'>
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={console.log}></Button>
    </TestElement>
</div>;

export default TestAll; 