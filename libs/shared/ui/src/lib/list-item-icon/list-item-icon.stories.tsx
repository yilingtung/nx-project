import { Story, Meta } from '@storybook/react';
import { ListItemIcon } from './list-item-icon';
import { ReactComponent as PlusSvg } from '../../assets/icons/plus.svg';

export default {
  component: ListItemIcon,
  title: 'ListItemIcon',
} as Meta;

const Template: Story = (args) => (
  <ListItemIcon {...args}>
    <PlusSvg />
  </ListItemIcon>
);

export const Primary = Template.bind({});
Primary.args = {};
