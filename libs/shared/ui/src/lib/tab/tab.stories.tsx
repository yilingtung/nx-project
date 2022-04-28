import { Story, Meta } from '@storybook/react';
import { Tab, TabProps } from './tab';

export default {
  component: Tab,
  title: 'Tab',
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Tab 15', active: false };
