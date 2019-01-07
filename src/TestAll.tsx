import * as React from 'react';
import './TestAll.css';
import TestElement from './TestElement';
import Button from './components/Button/button';
import Label from './components/Label/label';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import FoundMovies from './components/FoundMovies';
import { ResultItemProps, ResultItemActions } from './components/FoundMovies/ResultItem';
import SearchSummary from './components/SearchSummary/searchSummary';
import SortBy from './components/SearchSummary/sortBy';
import App from './app';
import { LOG } from './utils';

const enableBuggyComponent = false;
const getId = () => Math.random();
const filmResult = [
    {title:'Title', release_year: '2000', genres:['Action'], id:getId(), poster_path:'', budget:0, vote_count:0, tagline:'', runtime:0, revenue:0, release_date:'', overview:'', vote_average:0},
    {title:'Title 1', release_year: '2001', genres:['Drama'], id:getId(), poster_path:'', budget:0, vote_count:0, tagline:'', runtime:0, revenue:0, release_date:'', overview:'', vote_average:0},
    {title:'Title 2', release_year: '2002', genres:['Action', 'Drama'], id:getId(), poster_path:'', budget:0, vote_count:0, tagline:'', runtime:0, revenue:0, release_date:'', overview:'', vote_average:0},
];
const filmResultAction: ResultItemActions = {itemClick:(id:number) => {LOG(id)}};

const TestAll:React.SFC<object> = () =>
<div className="TestApp">
    <header className="TestApp-title">
        <h1>Welcome to Movie search test component page</h1>
    </header>
    <div>
        <App/>
    </div>
    <TestElement name='Search Box'>
        <SearchSummary
            resultCount={filmResult.length}
            resultSort={SortBy.RELEASE_DATE}
            changeSortBy={LOG}
        />
    </TestElement>
    <TestElement name='Search result examples'>
        <FoundMovies
            results={filmResult}
            actions={filmResultAction}
            />
    </TestElement>
    <TestElement name='Simple Components'>
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={LOG}></Button>
    </TestElement>
</div>;

export default TestAll;