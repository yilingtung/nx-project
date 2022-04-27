import { Story, Meta } from '@storybook/react';
import { DrawerDashboard, DrawerDashboardProps } from './drawer-dashboard';

export default {
  component: DrawerDashboard,
  title: 'DrawerDashboard',
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

const Template: Story<DrawerDashboardProps> = (args) => (
  <DrawerDashboard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
