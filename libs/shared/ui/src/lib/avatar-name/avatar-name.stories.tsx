import { Story, Meta } from '@storybook/react';
import { AvatarName, AvatarNameProps } from './avatar-name';

export default {
  component: AvatarName,
  title: 'AvatarName',
} as Meta;

const Template: Story<AvatarNameProps> = (args) => <AvatarName {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatarProps: {
    src: 'https://fakeimg.pl/300x100/eee/000/?text=A',
    alt: 'Irene',
  },
  name: 'Irene',
};
