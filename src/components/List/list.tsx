import * as React from 'react';
import ListItem, { IListItem } from './listItem';

export interface IList {
    list: IListItem[];
}

const List = ({list}: IList): JSX.Element =>
<ul className='list'>
    {list.map((item: IListItem) => <ListItem {...item} key={item.time}/>)}
</ul>;

export default List;
