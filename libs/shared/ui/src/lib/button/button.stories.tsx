import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

import { ReactComponent as PlusSvg } from '../../assets/icons/plus.svg';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
    kind: {
      options: ['primary', 'secondary', 'outline'],
      control: { type: 'select' },
    },
    shape: {
      options: ['squard', 'round'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  disabled: false,
  size: 'sm',
  kind: 'primary',
  shape: 'squard',
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  ...Default.args,
  IconLeft: { SVG: PlusSvg, type: 'stroke' },
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  ...Default.args,
  IconRight: { SVG: PlusSvg, type: 'stroke' },
};
