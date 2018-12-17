import * as React from 'react';

interface ErrorInfo {
    componentStack: string,
};
interface State{
    hasError: boolean;
    error?: Error;
    info?: ErrorInfo;
}

class ErrorBoundary extends React.Component<{}, State> {
    constructor(props: React.Component<{}, State>) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: unknown) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        // console.log(error, info);
        this.setState({
            error,
            info,
        })
    }
    render() {
        return this.state.hasError ?
            <h3>Rendering error happened</h3> :
            this.props.children;
        //  {this.state.error}<br/>
        //  <pre>{this.state.info}</pre>
        
    }
}

export default ErrorBoundary;
// https://dev.to/mildrenben/react-16-and-162-overview---fragments-portals-and-error-boundaries-49
