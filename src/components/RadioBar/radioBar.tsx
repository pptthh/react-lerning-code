import * as React from 'react';

interface RadioBarProps{
    labels: string[];
    name: string;
}

const RadioBar = ({labels, name}:RadioBarProps) =>
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
                title='1234'
                >
            </input>
            {label}
        </label>
    )
}
</>

export default RadioBar;