import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const b = storiesOf('Button', module);

for(let i = 0; i < 100; i++) {
  b.add(`Button ${i}`, () => (<button onClick={action(`clicked $bi`)}>Button {i}</button>))
}
