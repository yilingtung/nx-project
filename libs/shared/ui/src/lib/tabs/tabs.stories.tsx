import { Story, Meta } from '@storybook/react';

import Tab from '../tab/tab';
import { Tabs, TabsProps } from './tabs';

export default {
  component: Tabs,
  title: 'Tabs',
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab active>Aaaaere</Tab>
    <Tab>BBBBBBb</Tab>
    <Tab>CCCcCCC CCCCCCCCCCCCCCCCCCCCCCCCC</Tab>
    <Tab>DDDDDDDDDDDDDD DDDDD</Tab>
    <Tab>EEEEEEEEEEEEEEEEE</Tab>
  </Tabs>
);

export const Primary = Template.bind({});
Primary.args = {};
