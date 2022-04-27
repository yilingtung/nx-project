import { Story, Meta } from '@storybook/react';
import { Editor, EditorProps } from './editor';

export default {
  component: Editor,
  title: 'Editor',
} as Meta;

const Template: Story<EditorProps> = (args) => (
  <div className="h-screen">
    <Editor {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
