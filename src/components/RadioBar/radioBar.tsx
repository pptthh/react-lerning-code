import * as React from 'react';

interface RadioBarProps{
    labels: string[];
    name: string;
    selected?: string;
    className?: string;
}

const RadioBar = ({labels, name, selected, className}: RadioBarProps) =>
<>
{
    labels.map(
        (label: string) =>
        <label key={label}>
            <input
                type="radio"
                id={label}
                name={name}
                value={label}
                className={className}
                defaultChecked={selected === label}
                >
            </input>
            {label}
        </label>
    )
}
</>

export default RadioBar;