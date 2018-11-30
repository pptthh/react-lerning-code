import * as React from 'react';

export interface IButton {
    name?: string;
    label: string;
    title?: string;
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({disabled= false, name, label, onClick, title = ''}: IButton) =>
    <button
        name={name}
        title={title}
        onClick={onClick}
        disabled={disabled}
        >{label}</button>;

export default Button;
