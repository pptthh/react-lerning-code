import { configure, render } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import List from './list';

configure({adapter: new ReactSixteenAdapter()});

it('renders correctly List with correct data', () => {
    const LIST_TEST = [
        {
            text: 'test text',
            time: 0,
        },
        {
            text: 'test text2',
            time: 1111111111111,
        },
    ];

    const tree = render(
        <List list={LIST_TEST}/>);
    expect(toJson(tree)).toMatchSnapshot();
});

it('renders correctly List with Empty Array', () => {
    const tree = render(<List list={[]}/>);
    expect(toJson(tree)).toMatchSnapshot();
});
