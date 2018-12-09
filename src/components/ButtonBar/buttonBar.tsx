import * as React from 'react';
import Button from '../Button/button';
import ResultSort from '../SearchSummary/ResultSort';

interface ButtonProps{
    key: number | string;
    label: ResultSort;
    selected: ResultSort;
    onChange: (label: ResultSort) => void;
}
interface ButtonBarProps{
    labels: ResultSort[];
    selected: ResultSort;
    onChange?: (label: ResultSort) => void;
}

const button = ({label, selected, key, onChange}:ButtonProps) =>
<Button
    key={key}
    label={label}
    disabled={label === selected}
    onClick={() => onChange(label)}
/>

const ButtonBar:React.SFC<ButtonBarProps> = ({
    labels,
    selected,
    onChange=(sr: ResultSort) => dispatchEvent(new Event(sr))
}: ButtonBarProps) =>
<div>
    {labels.map((label, index) => button({label, key:index + label, selected, onChange}))}
</div>;

export default ButtonBar;