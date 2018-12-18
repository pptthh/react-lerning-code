import * as React from 'react';
import { ECHO } from '../../utils';

interface RadioBarProps {
    labels: string[];
    name: string;
    selected?: string;
    className?: string;
    labelTransform?: (label:string) => string;
    onChange: (e: unknown) => void;
}

const RadioBar = ({
    labels,
    name,
    selected,
    className,
    onChange,
    labelTransform = ECHO
}: RadioBarProps) =>
<>
{
    labels.map(
        (label: string) =>
        <label
            key={label}
            className={className}>
            <input
                type="radio"
                id={label}
                name={name}
                value={label}
                className={className}
                defaultChecked={selected === label}
                onChange={onChange}
                />
            {labelTransform(label)}
        </label>
    )
}
</>

export default RadioBar;