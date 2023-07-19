import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Design System/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h2>This is a Dialog Title</h2>
        <p>This is a Dialog Content</p>
      </div>
    ),
  },
};

export const ClosedDialog: Story = {
  args: {
    isOpen: false,
    children: (
      <div>
        <h2>This is a Dialog Title</h2>
        <p>This is a Dialog Content</p>
      </div>
    ),
  },
};
