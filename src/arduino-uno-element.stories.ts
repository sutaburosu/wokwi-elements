import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './arduino-uno-element';

storiesOf('Arduino Uno', module)
  .addDecorator(withKnobs)
  .add(
    'Uno R3',
    () => html`
      <wokwi-arduino-uno 
        .led13=${boolean('LED 13', false)}
        .ledPower=${boolean('Power LED', true)}
        .ledRX=${boolean('RX LED', false)}
        .ledTX=${boolean('TX LED', false)}
      ></wokwi-7segment>
    `
  );