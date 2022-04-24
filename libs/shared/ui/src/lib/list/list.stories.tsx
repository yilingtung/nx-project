import { Story, Meta } from '@storybook/react';
import { List } from './list';

export default {
  component: List,
  title: 'List',
} as Meta;

const Template: Story = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <li>1</li>
      <li>2</li>
    </>
  ),
};
