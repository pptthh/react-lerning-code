import * as React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

export interface TestElementProps {
    name: string;
    disableErrorCatching?: boolean;
    children: Array<JSX.Element> | JSX.Element;
}

const listChildren = (children: JSX.Element | JSX.Element[], name: string, disableErrorCatching = false) =>
!Array.isArray(children) ? 
    <div className="content">
        {disableErrorCatching ? children : <ErrorBoundary>{children}</ErrorBoundary>}
    </div> :
    children.map((child, index): JSX.Element =>
        <div className="content" key={`${child.key}_${index}`}>
            {disableErrorCatching ? children : <ErrorBoundary>{children}</ErrorBoundary>}
        </div>
    );

const TestElement = ({name,  children}: TestElementProps): JSX.Element =>
<div className="TestElement">
    <div className="title">{name}</div>
    {listChildren(children, name)}
</div>;

export default TestElement;