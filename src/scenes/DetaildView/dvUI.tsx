import * as React from 'react';
import DetailedPanel, { dpActions } from '../../components/DetailedPanel/detailedPanel';
import DetailedViewState from './dvState';

export interface dvUIActions {
    actions: dpActions;
}

const DetailedViewUI = (props: DetailedViewState & dvUIActions) =>
<div>
    {props.detailedPanel && <DetailedPanel
        {...props.detailedPanel}
        {... props.actions}
    />}
</div>;

export default DetailedViewUI;
