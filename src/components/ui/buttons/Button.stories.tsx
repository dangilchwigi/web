import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    theme: 'primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button',
    theme: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    theme: 'secondary',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Button',
    theme: 'secondary',
    disabled: true,
  },
};
