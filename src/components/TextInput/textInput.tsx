import * as React from 'react';

export interface ITextInput {
    name?: string;
    value?: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextInput = (props: ITextInput): JSX.Element =>
    <input type='text' {...props}/>;

export default TextInput;
