import type { Meta, StoryObj } from '@storybook/react';

import NotificationBanner from './NotificationBanner';

const meta = {
  title: 'Design System/NotificationBanner',
  component: NotificationBanner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationBannerExample: Story = {
  args: {
    notificationText: '내일 오후 8:00 시에 약속이 있어요',
  },
};
