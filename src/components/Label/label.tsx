import * as React from 'react';
import { NOOP } from '../../utils';

export interface ILabel {
    elementClass?: string;
    tooltip?: string;
    children: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// fixme: check props for valid text!!
const Label = ({onClick = NOOP, tooltip = '', children, elementClass = ''}: ILabel): JSX.Element =>
    <span className={elementClass} title={tooltip} onClick={onClick}>{children}</span>;

export default Label;
