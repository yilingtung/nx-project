import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { DrawerLeft, DrawerLeftProps } from './drawer-left';

export default {
  component: DrawerLeft,
  title: 'DrawerLeft',
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    isHide: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<DrawerLeftProps> = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <DrawerLeft {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
