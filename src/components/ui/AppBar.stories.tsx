import type { Meta, StoryObj } from '@storybook/react';

import AppBar from './AppBar';

const meta = {
  title: 'Design System/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppBarExample: Story = {
  args: {
    title: 'Title',
  },
};
