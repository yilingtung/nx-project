import { Story, Meta } from '@storybook/react';
import { DrawerBlog, DrawerBlogProps } from './drawer-blog';

export default {
  component: DrawerBlog,
  title: 'DrawerBlog',
} as Meta;

const Template: Story<DrawerBlogProps> = (args) => <DrawerBlog {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
