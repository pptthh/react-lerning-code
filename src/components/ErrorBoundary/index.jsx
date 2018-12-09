import * as React from 'react';

class ErrorBoundary extends React.Component {
    // constructor(props: React.Component) {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log(error, info)
    }
    render() {
        return this.state.hasError ?
            <h3>Rendering error happened for <i>{this.props.errorMsg}.</i></h3>:
            this.props.children;
    }
}

export default ErrorBoundary;