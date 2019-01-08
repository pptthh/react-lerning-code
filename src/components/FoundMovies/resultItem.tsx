import * as React from 'react';
import { Movie } from '../../services/rest/movie';

export interface ResultItemProps extends Movie {
    release_year: string;
}
export interface ResultItemFnCalls {
    itemClick: (id: number) => void;
}
const ResultItem: React.SFC<ResultItemProps & ResultItemFnCalls> = ({
    id,
    poster_path,
    title,
    release_year,
    genres,
    itemClick,
}: ResultItemProps & ResultItemFnCalls) =>
<div className='ResultItem' key={id}
    onClick={() => itemClick(id)}>
    <img src={poster_path} width='100%'/>
    <div className='item-data'>
        <div className='item-title'>{title}</div>
        <div className='item-date'>{release_year}</div>
    </div>
    <div className='item-gerne'>{genres.join(' ')}</div>
</div>;

export default ResultItem;
