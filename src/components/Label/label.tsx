import * as React from 'react';
import { NOOP } from '../../utils';

export interface ILabel {
    id?: string;
    tooltip?: string;
    children: string | number;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// fixme: check props for valid text!!
const Label = ({
    id,
    onClick,
    tooltip,
    children,
    className,
}: ILabel): JSX.Element =>
<span id={id}
    className={className}
    title={tooltip}
    onClick={onClick}>{children}
</span>;

export default Label;
