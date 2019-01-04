import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface dpActions{
    clickSearch: (event: unknown) => void;
}

export interface DetailedPanelProps{}

const DetailedPanel = (props: Movie & dpActions) =>
<>
    <h3>DetailedPanel:</h3>
    <label onClick={props.clickSearch}>DetailedPanel is comming here:</label>
    {JSON.stringify(props)}
</>;
export default DetailedPanel