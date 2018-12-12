import * as React from 'react';

interface Props{
    children: JSX.Element;
    fallBack?: (e: Error) => JSX.Element;
}

//  fixme: add process.env to show debug info only on dev env
const fallBackDefault = (e: Error) => <h3>{e.message}</h3>;
// <>
//     <h3>{e.message}</h3>
//     <pre>{e.stack}</pre>
// </>;

const ErrorBoundary:React.SFC<Props> = ({
    children,
    fallBack = fallBackDefault
}: Props) => {
    try {
        return children;
    }
    catch(e){
        return fallBack(e);
    }
}

export default ErrorBoundary;
