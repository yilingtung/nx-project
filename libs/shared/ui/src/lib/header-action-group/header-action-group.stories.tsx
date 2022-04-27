import { Story, Meta } from '@storybook/react';
import { HeaderActionGroup } from './header-action-group';

export default {
  component: HeaderActionGroup,
  title: 'HeaderActionGroup',
} as Meta;

const Template: Story = (args) => <HeaderActionGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
