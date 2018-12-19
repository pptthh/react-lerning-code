import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface ResultItemProps 
// extends Movie
{
    src?: string;
    title: string;
    date: string;
    gerne: string;
    key: number | string;
}

const ResultItem: React.SFC<ResultItemProps> = ({src='movie.ico', title, date, gerne, key}: ResultItemProps) =>
<div className='ResultItem' key={key}>
    <img src={src} width={100}/>
    <div className='item-data'>
        <div className='item-title'>{title}</div>
        <div className='item-date'>{date}</div>
    </div>
    <div className='item-gerne'>{gerne}</div>
</div>;

export default ResultItem;