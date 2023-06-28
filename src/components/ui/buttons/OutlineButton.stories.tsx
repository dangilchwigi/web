import type { Meta, StoryObj } from '@storybook/react';

import OutlineButton from './OutlineButton';

const meta = {
  title: 'Design System/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OutlineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineButtonBase: Story = {
  args: {
    children: 'Button',
  },
};

export const OutlineButtonDisabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
