import * as React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

export interface TestElementProps {
    name: string;
    disableErrorCatching?: boolean;
    children?: JSX.Element[] | JSX.Element;
}

const listChildren = ({children, name, disableErrorCatching}: TestElementProps) =>
    !children ? <></> :
    !Array.isArray(children) ? showChild(children, name, disableErrorCatching) :
    showChildren(children, name, disableErrorCatching);

const showChild = (children: JSX.Element, name: string, disableErrorCatching = false) =>
<div className="content">
    {disableErrorCatching ? children : <ErrorBoundary>{children}</ErrorBoundary>}
</div>

const showChildren = (children: JSX.Element[], name: string, disableErrorCatching = false) =>
children.map((child, index): JSX.Element =>
    <div className="content" key={`${child.key}_${index}`}>
        {disableErrorCatching ? children : <ErrorBoundary>{children}</ErrorBoundary>}
    </div>
);

const TestElement = (props: TestElementProps): JSX.Element =>
<div className="TestElement">
    <div className="title">{name}</div>
    {listChildren(props)}
</div>;

export default TestElement;