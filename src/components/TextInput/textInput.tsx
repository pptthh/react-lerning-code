import * as React from 'react';

export interface ITextInput {
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const TextInput = (props: ITextInput): JSX.Element =>
    <input type='text' className='TextInput' {...props}/>;

export default TextInput;
