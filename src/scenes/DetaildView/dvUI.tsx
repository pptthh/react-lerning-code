import * as React from 'react';
import DetailedPanel from '../../components/DetailedPanel/detailedPanelProps';
import DetailedViewState from './dvState';

// export interface DetailedViewActions {
//     actions: ResultItemActions;
// }

const DetailedViewUI = (props: DetailedViewState) =>
<div>
    {props.detailedPanel && <DetailedPanel {...props.detailedPanel}/>}
</div>;

export default DetailedViewUI;
