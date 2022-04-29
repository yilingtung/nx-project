import { Story, Meta } from '@storybook/react';

import { Dropdown } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Template: Story = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  triggerComponent: (
    <div className="inline-flex p-2 bg-primary text-netural-10">Dropdown</div>
  ),
  popperOption: {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, 10],
        },
      },
    ],
  },
  children: (
    <div className="inline-flex bg-netural-80 text-netural-10 p-2">test</div>
  ),
};
