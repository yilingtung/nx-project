import { Story, Meta } from '@storybook/react';
import { DrawerLeft, DrawerLeftProps } from './drawer-left';

export default {
  component: DrawerLeft,
  title: 'DrawerLeft',
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    isHide: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<DrawerLeftProps> = (args) => <DrawerLeft {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
