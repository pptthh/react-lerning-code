import * as React from 'react';
import DetailedPanel from '../../components/DetailedPanel/detailedPanel';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemFnCalls } from '../../components/FoundMovies/resultItem';
import Label from '../../components/Label/label';
import DetailedViewState from './dvState';
import DvUrlProps from './dvUrlProps';

export interface DvUiFnCalls {
    resultsItemfnCalls: ResultItemFnCalls;
}

const dvUI =
(props: DetailedViewState & DvUiFnCalls & DvUrlProps) =>
!props.detailedPanel ? <>id not found</> :
<div>
    <DetailedPanel
        {...props.detailedPanel}
    />

    <Label className='genreListHeader'>
        {`Films by ${props.detailedPanel.genres[0]} genre`}
    </Label>

    <FoundMovies
        results={props.results}
        fnCalls={props.resultsItemfnCalls}
    />
</div>;

export default dvUI;
