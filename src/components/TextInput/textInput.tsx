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
    onEnter?: (e: unknown) => void;
    placeholder?: string;
}

const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, onEnter?: Function) =>
    event.key === KeyCodes.ENTER && onEnter ? onEnter() : undefined;

const TextInput: React.SFC<ITextInput> = ({
    name,
    value,
    className,
    onChange,
    onEnter,
    placeholder,
}: ITextInput): JSX.Element => (
    <input
        type='text'
        name={name}
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={(e) => onKeyUp(e, onEnter)}
    />);

export default TextInput;
