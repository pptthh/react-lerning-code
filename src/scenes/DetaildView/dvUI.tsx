import * as React from 'react';
import Button from '../../components/Button/button';
import DetailedPanel from '../../components/DetailedPanel/detailedPanel';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemFnCalls } from '../../components/FoundMovies/resultItem';
import Header from '../../components/Header/header';
import Label from '../../components/Label/label';
import { IS_SERVER } from '../../utils';
import { pageNotFound } from '../Root/rootView';
import DetailedViewState from './dvState';
import DvUrlProps from './dvUrlProps';
import { Link } from 'react-router-dom';

export interface DvUiFnCalls {
    resultsItemFnCalls: ResultItemFnCalls;
    urlOpenedFnCalls: (props: DetailedViewState & DvUiFnCalls & DvUrlProps) => boolean;
}

const LoadingMovie: React.SFC = () => IS_SERVER() ? <></> : <>loading movie ...</>;

const dvUI =
(props: DetailedViewState & DvUiFnCalls & DvUrlProps) =>
props.filedId === props.match.params.id ? <>movie not found {pageNotFound()}</> :
!props.urlOpenedFnCalls(props) ? <LoadingMovie/> :
!props.detailedPanel ? <LoadingMovie/> :
<div>
    <Header>
        netflixroulette
        <Link to={'/'}>
        <Button
            className='showSearch'
            tooltip='Show Search Form'
            label='SEARCH'
            onClick={() => props.resultsItemFnCalls.itemClick(0)}
        />
        </Link>
    </Header>
    <DetailedPanel
        {...props.detailedPanel}
    />

    <Label className='genreListHeader'>
        {`Films by ${props.detailedPanel.genres[0]} genre`}
    </Label>

    <FoundMovies
        results={props.results}
        fnCalls={props.resultsItemFnCalls}
    />
</div>;

export default dvUI;
