import * as React from 'react';
import App from './app';
import Button from './components/Button/button';
import Footer from './components/Footer/footer';
import FoundMovies from './components/FoundMovies';
import { ResultItemFnCalls, ResultItemProps } from './components/FoundMovies/resultItem';
import Header from './components/Header/header';
import Label from './components/Label/label';
import SearchSummary from './components/SearchSummary/searchSummary';
import sortByEnum from './components/SearchSummary/sortBy';
import './TestAll.css';
import TestElement from './testElement';
import { LOG } from './utils';

const enableBuggyComponent = false;
const getId = () => Math.random();
const filmResult = [/* tslint:disable */
    { title: 'Title', release_year: '2000', genres: ['Action'], id: getId(), poster_path: '', budget: 0, vote_count: 0, tagline: '', runtime: 0, revenue: 0, release_date: '', overview: '', vote_average: 0 },
    { title: 'Title 1', release_year: '2001', genres: ['Drama'], id: getId(), poster_path: '', budget: 0, vote_count: 0, tagline: '', runtime: 0, revenue: 0, release_date: '', overview: '', vote_average: 0 },
    { title: 'Title 2', release_year: '2002', genres: ['Action', 'Drama'], id: getId(), poster_path: '', budget: 0, vote_count: 0, tagline: '', runtime: 0, revenue: 0, release_date: '', overview: '', vote_average: 0 },
]; /* tslint:enable */
const filmResultAction: ResultItemFnCalls = { itemClick: (id: number) => {LOG(id); } };

const TestAll: React.SFC<object> = () => (
<div className='TestApp'>
    <header className='TestApp-title'>
        <h1>Welcome to Movie search test component page</h1>
    </header>
    <div>
        <App/>
    </div>
    <TestElement name='Search Box'>
        <SearchSummary
            resultCount={filmResult.length}
            resultSort={sortByEnum.RELEASE_DATE}
            changeSortBy={LOG}
        />
    </TestElement>
    <TestElement name='Search result examples'>
        <FoundMovies
            results={filmResult}
            fnCalls={filmResultAction}
        />
    </TestElement>
    <TestElement name='Simple Components'>
        <Footer/>
        <Header>Component Header Test</Header>
        <Label>simple label</Label>
        <Button label='Button' onClick={LOG}/>
    </TestElement>
</div>
);

export default TestAll;
