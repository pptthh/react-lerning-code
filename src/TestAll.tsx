import * as React from 'react';
import './TestAll.css';
import TestElement from './TestElement';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import FoundMovies from './components/FoundMovies';
import { ResultItemProps } from './components/FoundMovies/ResultItem';
import SearchSummary from './components/SearchSummary/searchSummary';
import SortBy from './components/SearchSummary/sortBy';
import BuggyComponent from './components/ErrorBoundary/buggyComponent';
import ErrorBoundary from './components/ErrorBoundary/errorBoundarySFC';
import App from './app';

const enableBuggyComponent = false;
const getId = () => Math.random();
const filmResult: ResultItemProps[] = [
    {title:'Title', date: '2000', gerne:'Action', key:getId()},
    {title:'Title 1', date: '2001', gerne:'Drama', key:getId()},
    {title:'Title 2', date: '2002', gerne:'Action', key:getId(), src:''},
];

const TestAll:React.SFC<object> = () =>
<div className="TestApp">
    <header className="TestApp-title">
        <h1>Welcome to Movie search test component page</h1>
    </header>
    <div>
        <App/>
    </div>
{/*    <TestElement name='Search Results'>
        <Search/>
    </TestElement>

    <TestElement name='Detailed View'>
        <DetailedView/>
    </TestElement> {/**/}
    <TestElement name='Search Box'>
        <SearchSummary
            resultCount={filmResult.length}
            resultSort={SortBy.RELEASE_DATE}
            changeSortBy={console.log}
        />
    </TestElement>
    <TestElement name='Search result examples'>
        <FoundMovies results={filmResult}/>
    </TestElement>
    <TestElement name='Simple Components'>
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={console.log}></Button>
    </TestElement>
    
    <TestElement name='ErrorBoundary tester'>
        <label></label>
        <BuggyComponent enable={enableBuggyComponent}/>
    </TestElement>
    
    <TestElement
        name='ErrorBoundarySFC tester'
        disableErrorCatching={true}>
        <ErrorBoundary>
            <BuggyComponent enable={enableBuggyComponent}/>
        </ErrorBoundary>
    </TestElement>
    
</div>;

export default TestAll;