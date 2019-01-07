import * as React from 'react';
import DetailedPanel, { dpActions } from '../../components/DetailedPanel/detailedPanel';
import DetailedViewState from './dvState';
import Label from '../../components/Label/label';
import FoundMovies from '../../components/FoundMovies';

export interface dvUIActions {
    actions: dpActions;
}

const DetailedViewUI = (props: DetailedViewState & dvUIActions) =>
!props.detailedPanel ? <></> :
<div>
    <DetailedPanel
        {...props.detailedPanel}
        {...props.actions}
    />
    <Label className='genreListHeader'>
        {`Films by ${props.detailedPanel.genres[0]} genre`}
    </Label>
    <FoundMovies
        {...props.results}
    />
</div>;

export default DetailedViewUI;
