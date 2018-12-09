// import './TestAll.css';
import * as React from 'react';
import TestElement from './TestItem';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import FoundMovies from './scenes/SearchResults/FoundMovies';
import { ResultItemProps } from './scenes/SearchResults/FoundMovies/ResultItem';
import SearchSummary from './components/SearchSummary/searchSummary';
import ResultSort from './components/SearchSummary/ResultSort';
import ButtonBar from './components/ButtonBar/buttonBar';
import RadioBar from './components/RadioBar/radioBar';
import BuggyComponent from './components/ErrorBoundary/buggyComponent';
import DetailedView from './scenes/DetaildView/detailedView';
import Search from './scenes/SearchResults/search';

const getId = () => Math.random();
const filmResult: ResultItemProps[] = [
    {title:'Title', date: '2000', gerne:'Action', key:getId()},
    {title:'Title 1', date: '2001', gerne:'Drama', key:getId()},
    {title:'Title 2', date: '2002', gerne:'Action', key:getId(), src:''},
];

const TestAll:React.SFC<object> = () =>
<div className="TestApp">
    <header className="App-title">
        <h1>Welcome to Movie search test component page</h1>
    </header>

    <TestElement name='Search Results'>
        <Search/>
    </TestElement>
    <TestElement name='detailed view'>
        <DetailedView/>
    </TestElement>
    <TestElement name='Search Box'>
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
        <FoundMovies results={filmResult}/>
        <FoundMovies results={[]}/>
    </TestElement>
    <TestElement name='Simple Components'>
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={console.log}></Button>
    </TestElement>
    <TestElement name='ErrorBoundary tester'>
        <label></label>
        <BuggyComponent enable={false}/>
    </TestElement>
</div>;

export default TestAll;