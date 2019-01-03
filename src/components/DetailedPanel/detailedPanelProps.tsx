import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface dpActions{
    clickSearch: (event: unknown) => void;
}

const DetailedPanel = (props: Movie & dpActions) =>
<>
    <label onClick={props.clickSearch}>DetailedPanel is comming here:</label>
    {JSON.stringify(props)}
</>;
export default DetailedPanel