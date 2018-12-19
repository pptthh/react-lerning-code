import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface ResultItemProps extends Movie{
    releaseYear: string;
}

const ResultItem: React.SFC<ResultItemProps> = ({
    poster_path,
    title,
    releaseYear,
    genres,
    id
}: ResultItemProps) =>
<div className='ResultItem' key={id}>
    <img src={poster_path} width='100%'/>
    <div className='item-data'>
        <div className='item-title'>{title}</div>
        <div className='item-date'>{releaseYear}</div>
    </div>
    <div className='item-gerne'>{genres.join(' ')}</div>
</div>;

export default ResultItem;