import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ListItem } from './list-item';

export default {
  component: ListItem,
  title: 'ListItem',
} as Meta;

const Template: Story = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: action('onClick'),
  children: 'ListItem',
};
