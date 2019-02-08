import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import RadioBar, { RadioBarProps } from '../src/components/RadioBar/radioBar';

const props = (fn: Function): RadioBarProps => ({
    labels: ['btn1', 'btn2', 'btn3'],
    selected: 'btn2',
    name: 'RadioButton',
    onChange : (e: unknown) => {console.log('clicked', e), fn('clicked'); },
});

storiesOf('RadioButton', module)
    .add('RadioButton test linkTo', () => <RadioBar {... props(linkTo)} />)
    .add('RadioButton test action', () => <RadioBar {... props(action)} />)
;
