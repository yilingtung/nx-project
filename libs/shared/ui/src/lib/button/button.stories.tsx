import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);
  return (
    <div className="bg-gray-100 p-20">
      <Button {...args} onClick={(topicName) => setClickedTopic(topicName)} />
      {clickedTopic && <div>Button has been clicked: {clickedTopic}</div>}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};
