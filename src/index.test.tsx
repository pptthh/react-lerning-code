import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '.';
import TestAll from './TestAll';

describe('describe Application', () => {
    it('renders TestAll without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TestAll/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders App without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
    