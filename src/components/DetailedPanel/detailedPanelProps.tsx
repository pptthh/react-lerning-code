import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface DetailedPanelProps{
    cover: string; // url
    title: string;
    rating: number;
    duration: number;
    release: number;
    description: string;
}

const DetailedPanel = (props: Movie) =>
<>
    <label>DetailedPanel is comming here:</label>
    {JSON.stringify(props)}
</>;
export default DetailedPanel