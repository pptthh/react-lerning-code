import * as React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

export interface TestElementProps {
    name: string;
    children: Array<JSX.Element> | JSX.Element;
}

const listChildren = (children: JSX.Element | JSX.Element[], name: string) =>
!Array.isArray(children) ? 
    <div className="App-item-content">
        <ErrorBoundary errorMsg={`TestElement: ${name}`}>
            {children}
        </ErrorBoundary>
    </div> :
    children.map((child, index): JSX.Element =>
        <div className="App-item-content" key={`${child.key}_${index}`}>
            <ErrorBoundary errorMsg={`TestElement: ${name} in child #${index + 1}`}>
                {child}
            </ErrorBoundary>
        </div>
    );

const TestElement = ({name,  children}: TestElementProps): JSX.Element =>
<div className="App-single-item-block">
    <div className="App-item-label">{name}</div>
    {listChildren(children, name)}
</div>;

export default TestElement;