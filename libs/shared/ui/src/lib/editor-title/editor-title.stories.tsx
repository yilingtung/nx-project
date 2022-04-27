import { Story, Meta } from '@storybook/react';
import { EditorTitle } from './editor-title';

export default {
  component: EditorTitle,
  title: 'EditorTitle',
} as Meta;

const Template: Story = (args) => <EditorTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: '寫測試', prefix: '如何', suffix: '?' };
