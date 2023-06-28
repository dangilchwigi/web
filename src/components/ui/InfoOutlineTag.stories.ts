import type { Meta, StoryObj } from '@storybook/react';

import InfoOutlineTag from './InfoOutlineTag';

const meta = {
  title: 'Design System/InfoOutlineTag',
  component: InfoOutlineTag,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InfoOutlineTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoOutlineTagExample: Story = {
  args: {
    label: '추천',
  },
};
