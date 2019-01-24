import * as React from 'react';
import { Movie } from '../../services/rest/movie';
import Label from '../Label/label';

const DetailedPanel: React.SFC<Movie> = (props: Movie) =>
<div className='DetailedPanel'>
    <img src={props.poster_path} />
    <div className='fimlData'>
        <div>
            <Label id='filmTitle'>{props.title}</Label>
            {!props.vote_average ? <></> :
                <Label id='filmRating'>{props.vote_average.toPrecision(2)}</Label>
            }
        </div>
        <span>&nbsp;</span>
        <div>
            <Label id='filmYear'>{props.release_year}</Label>
            <Label id='filmDuration'>{props.runtime ? props.runtime + ' min' : ''}</Label>
        </div>
        <span>&nbsp;</span>
        <div>
            <Label id='fimlDescription'>{props.overview}</Label>
        </div>
    </div>
</div>;
export default DetailedPanel;
