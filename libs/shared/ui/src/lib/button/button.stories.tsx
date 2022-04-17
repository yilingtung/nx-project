import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

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
