import { configure, render, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import Label from './label';

configure({ adapter: new ReactSixteenAdapter() });

describe('describe Label', () => {
    it('renders correctly with Text only', () => {
        const tree = render(<Label>simple text22</Label>);

        expect(toJson(tree)).toMatchSnapshot();
    });

    it('shallow renders correctly with params', () => {
        let clickCounter = 0;
        const tree = shallow(
            <Label tooltip={'tooltip'} className={'elementClass'} onClick={() => clickCounter++}>
                renders correctly with params
            </Label>);

        expect(toJson(tree)).toMatchSnapshot();
        tree.simulate('click');
        expect(clickCounter).toEqual(1);
    });

    it('Shallow render example', () => {
        const tree = shallow(<h1><Label>simple text22</Label></h1>);

        expect(toJson(tree)).toMatchSnapshot();
    });
});
