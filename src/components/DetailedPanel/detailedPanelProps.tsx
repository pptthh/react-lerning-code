import * as React from 'react';

export interface DetailedPanelProps{
    cover: string; // url
    title: string;
    rating: number;
    duration: number;
    release: number;
    description: string;
}

const DetailedPanel = (props: DetailedPanelProps) =>
<>
    <label>DetailedPanel is comming here:</label>
    {JSON.stringify(props)}
</>;
export default DetailedPanel