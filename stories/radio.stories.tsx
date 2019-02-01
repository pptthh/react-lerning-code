import React from 'react';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import Button from '@storybook/react/dist/demo/Button';

storiesOf('RadioButton', module)
    .add('RadioButton', () => <Button showApp={linkTo('Button')} />)
    .add('RadioButton', () => <Button showApp={linkTo('Button')} />)
;
