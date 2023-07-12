import { atom } from 'recoil';

export type User = {
  email: string;
  nickname: string;
  profileImage?: string;
  accessToken: string;
  refreshToken: string;
};

export const UserState = atom<User | null>({
  key: 'UserState',
  default: {
    email: '',
    nickname: '',
    profileImage: '',
    accessToken: '',
    refreshToken: '',
  },
});
