import * as React from 'react';

export interface IButton {
    name?: string;
    label: string;
    tooltip?: string;
    className?: string;
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({disabled=false, name, label, onClick, className, tooltip=''}: IButton) =>
    <button
        className={className}
        name={name}
        title={tooltip}
        onClick={onClick}
        disabled={disabled}
        >{label}</button>;

export default Button;
