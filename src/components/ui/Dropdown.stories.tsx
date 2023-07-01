import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownExample: Story = {
  args: {
    label: 'Dropdown',
    items: [
      {
        label: 'Item 1',
        value: 'item1',
      },
      {
        label: 'Item 2',
        value: 'item2',
      },
      {
        label: 'Item 3',
        value: 'item3',
        disable: true,
      },
    ],
  },
};