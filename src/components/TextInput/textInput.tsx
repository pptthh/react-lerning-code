import * as React from 'react';
import { LOG, LOG_WARNING } from '../../utils';

enum KeyCodes {
    ALT = 'Alt',
    CONTROL = 'Control',
    ENTER = 'Enter',
    SHIFT = 'Shift',
}

export interface ITextInput {
    name?: string;
    value?: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: () => void;
    placeholder?: string;
}

const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, props: ITextInput) =>
    event.key === KeyCodes.ENTER && props.onEnter ?
        props.onEnter() :
        undefined;

const TextInput: React.SFC<ITextInput> = (props: ITextInput): JSX.Element =>
    <input type='text' {...props}
        onKeyUp={(e) => onKeyUp(e, props)}
    />;

export default TextInput;
