import * as React from 'react';
import DetailedPanel from '../../components/DetailedPanel/detailedPanel';
import DetailedViewState from './dvState';
import Label from '../../components/Label/label';
import FoundMovies from '../../components/FoundMovies';
import { ResultItemActions } from '../../components/FoundMovies/ResultItem';

export interface dvUIActions {
    resultsItemAction: ResultItemActions;
}

const DetailedViewUI = (props: DetailedViewState & dvUIActions) =>
!props.detailedPanel ? <></> :
<div>
    <DetailedPanel
        {...props.detailedPanel}
    />

    <Label className='genreListHeader'>
        {`Films by ${props.detailedPanel.genres[0]} genre`}
    </Label>
    
    <FoundMovies
        results={props.results}
        actions={props.resultsItemAction}
    />
</div>;

export default DetailedViewUI;
