import * as React from 'react';

export interface IListItem {
    text: JSX.Element | string;
    time: number;
}

const ListItem = ({time, text}: IListItem) => <li className='ListItem'>{text}</li>;

export default ListItem;
