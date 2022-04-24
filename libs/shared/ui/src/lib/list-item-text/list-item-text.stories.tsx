import { Story, Meta } from '@storybook/react';
import { ListItemText, ListItemTextProps } from './list-item-text';

export default {
  component: ListItemText,
  title: 'ListItemText',
} as Meta;

const Template: Story<ListItemTextProps> = ({ children, ...args }) => (
  <ListItemText {...args}>{children}</ListItemText>
);

export const Primary = Template.bind({});
Primary.args = { children: 'ListItemText' };
