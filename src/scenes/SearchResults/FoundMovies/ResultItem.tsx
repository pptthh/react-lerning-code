import * as React from 'react';

export interface ResultItemProps{
    src?: string;
    title: string;
    date: string;
    gerne: string;
    key: number | string;
}

const ResultItem: React.SFC<ResultItemProps> = ({src='movie.ico', title, date, gerne, key}: ResultItemProps) =>
<span className='ResultItem' key={key}>
    <img src={src} width={100}/>
    <div>{title}</div>
    <div>{date}</div>
    <div>{gerne}</div>
</span>;

export default ResultItem;