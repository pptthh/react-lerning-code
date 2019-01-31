import * as React from 'react';

export interface TestElementProps {
    name: string;
    disableContent?: boolean;
    disableErrorCatching?: boolean;
    children?: JSX.Element[] | JSX.Element;
}

const listChildren = (props: TestElementProps) =>
    !props.children ? <></> :
    !Array.isArray(props.children) ? showChild(props) :
        showChildren(props.children, props.disableErrorCatching);

const showChild = ({ children, disableErrorCatching = false }: TestElementProps) => (
<div className='content'>
    {disableErrorCatching ? children : <>{children}</>}
</div>);

const showChildren = (children: JSX.Element[], disableErrorCatching= false) =>
children.map((child, index): JSX.Element => (
    <div className='content' key={`${child.key}_${index}`}>
        {disableErrorCatching ? children : <>{children}</>}
    </div>),
);

const TestElement = (props: TestElementProps): JSX.Element => (
<div className='TestElement'>
    <div className='title'>{props.name}</div>
    {!props.disableContent && listChildren(props)}
</div>);

export default TestElement;
