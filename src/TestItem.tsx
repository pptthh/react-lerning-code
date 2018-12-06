import * as React from 'react';

export interface TestElementProps {
    name: string;
    children: Array<JSX.Element> | JSX.Element;
}

const listChildren = (children: JSX.Element | JSX.Element[]) =>
!Array.isArray(children) ? 
    <div className="App-item-content">{children}</div> :
    children.map((child, index): JSX.Element =>
        <div className="App-item-content" key={`${child.key}_${index}`}>
            {child}
        </div>
    );

const TestElement = ({name,  children}: TestElementProps): JSX.Element =>
<div className="App-single-item-block">
    <div className="App-item-label">{name}</div>
    {listChildren(children)}
</div>;

export default TestElement;