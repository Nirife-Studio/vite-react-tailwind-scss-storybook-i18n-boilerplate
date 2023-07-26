import Button from "./Button";

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    content: { control: 'text' }, // Control content prop with a text input
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Click me', // Set default value for the content prop
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  content: 'Custom Content', // Provide different content value for this story
};
