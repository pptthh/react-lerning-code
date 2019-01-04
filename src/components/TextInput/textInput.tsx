import * as React from 'react';

export interface ITextInput {
    name?: string;
    value?: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}

const TextInput: React.SFC<ITextInput> = (props: ITextInput): JSX.Element =>
    <input type='text' {... props}/>;

export default TextInput;
