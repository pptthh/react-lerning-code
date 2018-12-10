import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '.';

describe('describe Application', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
    