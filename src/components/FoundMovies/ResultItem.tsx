import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface ResultItemProps 
// extends Movie
{
    src?: string;
    title: string;
    releaseYear: string;
    gernes: string[];
    key: number | string;
}

const ResultItem: React.SFC<ResultItemProps> = ({src='movie.ico', title, releaseYear, gernes: gerne, key}: ResultItemProps) =>
<div className='ResultItem' key={key}>
    <img src={src} width={100}/>
    <div className='item-data'>
        <div className='item-title'>{title}</div>
        <div className='item-date'>{releaseYear}</div>
    </div>
    <div className='item-gerne'>{gerne.join()}</div>
</div>;

export default ResultItem;