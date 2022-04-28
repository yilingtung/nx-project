import { Story, Meta } from '@storybook/react';
import { CardPost, CardPostProps } from './card-post';

export default {
  component: CardPost,
  title: 'CardPost',
} as Meta;

const Template: Story<CardPostProps> = (args) => <CardPost {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '如何提升簡報效率與品質？',
  time: '2021-04-20 13:00',
  author: {
    id: 0,
    customId: '123',
    name: 'Irene',
    avatar: 'https://fakeimg.pl/300x100/eee/000/?text=A',
  },
};
