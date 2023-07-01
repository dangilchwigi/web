import type { Meta, StoryObj } from '@storybook/react';

import Dialog from './Dialog';

const meta = {
  title: 'Design System/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogExample: Story = {
  args: {
    title: 'Title',
    content: 'content',
    isOpen: true,
  },
};

export const DialogActionButton: Story = {
  args: {
    title: 'Title',
    content: 'content',
    isOpen: true,
    actionLabel: 'action',
  },
};
