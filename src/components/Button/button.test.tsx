import { configure, render, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import { NOOP } from '../../utils';
import Button from './button';

configure({adapter: new ReactSixteenAdapter()});

describe('describe Button', () => {
    it('renders correctly with Label only', () => {
        const tree = render(<Button label='simple text22' onClick={NOOP}/>);

        expect(toJson(tree)).toMatchSnapshot();
    });

    it('shallow renders correctly with params', () => {
        let clickCounter = 0;
        const tree = shallow(
            <Button name='name' label='btn' onClick={() => {clickCounter++; }}>
                renders correctly with params
            </Button>);

        expect(toJson(tree)).toMatchSnapshot();
        tree.simulate('click');
        expect(clickCounter).toEqual(1);
    });
});
