import * as React from 'react';
import { LOG, LOG_WARNING } from '../../utils';

const ENTER = 'Enter';

export interface ITextInput {
    name?: string;
    value?: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: () => void;
    placeholder?: string;
}

const checkEnter = (
    event: React.KeyboardEvent<HTMLInputElement>,
    onEnter?:() => void
) => {
    if (event.key === ENTER && onEnter)
    {
        onEnter();
    }
}

const TextInput = (props: ITextInput): JSX.Element =>
    <input type='text' {...props}
        onKeyUp={(e) => checkEnter(e, props.onEnter)}
    />;

export default TextInput;
