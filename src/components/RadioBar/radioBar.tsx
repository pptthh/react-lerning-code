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
        (value, i) =>
        <span key={value}>
            <input
                type="radio"
                id={value}
                name={name}
                value={value}
                className={className}
                defaultChecked={selected === value}
                onChange={onChange}
                />
            <label
                key={value}
                htmlFor={value}
                className={className}
                >
                {labelTransform(value)}
            </label>
        </span>
    )
}
</>

export default RadioBar;