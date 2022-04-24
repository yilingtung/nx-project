import { Story, Meta } from '@storybook/react';
import { Drawer } from './drawer';

export default {
  component: Drawer,
  title: 'Drawer',
} as Meta;

const Template: Story = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
  expandWidth: 240,
  collapseWidth: 80,
};
