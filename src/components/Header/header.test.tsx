import * as React from 'react';
import Header from './header';
import toJson from 'enzyme-to-json';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import {configure, render, shallow} from 'enzyme';

configure({adapter: new ReactSixteenAdapter()});

it('renders correctly with Header', () => {
    const tree = render(<Header>Panel Header</Header>);

    expect(toJson(tree)).toMatchSnapshot();
});

it('Shallow render example', () => {
    const tree = shallow(<h1><Header tooltip={'tooltip'}>Panel Header in H1</Header></h1>);

    expect(toJson(tree)).toMatchSnapshot();
});
