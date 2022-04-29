import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { DropdownUser, DropdownUserProps } from './dropdown-user';

export default {
  component: DropdownUser,
  title: 'DropdownUser',
} as Meta;

const Template: Story<DropdownUserProps> = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <div className="ml-[100px]">
      <DropdownUser {...args} />
    </div>
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {};
