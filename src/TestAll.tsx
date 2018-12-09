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
import ButtonBar from './components/ButtonBar/buttonBar';
import RadioBar from './components/RadioBar/radioBar';
import BuggyComp from './components/ErrorBoundary/BuggyComp';

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

    <TestElement name='ErrorBoundary tester'>
        <label>text</label>
        <BuggyComp enable={true}/>
    </TestElement>

    <TestElement name='Search Box'>
        <SearchForm/>
        <SearchSummary
            resultCount={filmResult.length}
            resultSort={ResultSort.RELEASE_DATE}
        />
        <ButtonBar
            labels={[ResultSort.RELEASE_DATE, ResultSort.RATING]}
            selected={ResultSort.RELEASE_DATE}
            onChange={console.log}
        />
        <RadioBar
            labels={[ResultSort.RELEASE_DATE, ResultSort.RATING]}
            name='radioBar'
            />
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