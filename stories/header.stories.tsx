import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button/button';
import Header, { HeaderProps } from '../src/components/Header/header';

const props: HeaderProps = {
    children: 'Header test 1',
    tooltip: 'Tool tip test for header componnet',
};

storiesOf('Header', module)
    .add('Header test 1', () => <Header {... props} />)
    .add('Header test 2', () => <Header>Text</Header>)
    .add('Header test 3', () =>
    <Header>Text and a button in the header component: <Button name='name' label='button' onClick={(e) => {console.log(e);}}/></Header>);
