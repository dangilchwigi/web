import type { Meta, StoryObj } from '@storybook/react';

import KeywordRank from './KeywordRank';

const meta = {
  title: 'Design System/KeywordRank',
  component: KeywordRank,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KeywordRank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeywordRankExample: Story = {
  args: {
    category: 'food',
    keyword: '치킨',
    value: 23,
    variation: 'decrement',
  },
};
