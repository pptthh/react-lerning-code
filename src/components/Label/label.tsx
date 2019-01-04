import * as React from 'react';
import { NOOP } from '../../utils';

export interface ILabel {
    id?: string;
    tooltip?: string;
    children: string | number;
    elementClass?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// fixme: check props for valid text!!
const Label = ({
    id,
    onClick,
    tooltip,
    children,
    elementClass,
}: ILabel): JSX.Element =>
<span id={id}
    className={elementClass}
    title={tooltip}
    onClick={onClick}>{children}
</span>;

export default Label;
