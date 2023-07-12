import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MdHome,
  MdCalendarMonth,
  MdOutlineGroups,
  MdAccountCircle,
} from 'react-icons/md';

import AppBar from './components/ui/AppBar';
import BottomNavigation from './components/ui/navigations/BottomNavigation';
import RouteTransition from './components/route/RouteTransition';

const Auth = React.lazy(() => import('./pages/Auth'));
const AuthCallback = React.lazy(() => import('./components/auth/Auth'));

const OnBoarding = React.lazy(() => import('./pages/OnBoarding'));

const Home = React.lazy(() => import('./pages/Home'));

const Together = React.lazy(() => import('./pages/Together'));

const Profile = React.lazy(() => import('./pages/Profile'));

const AppInner = () => {
  const navItems = [
    { label: '홈', icon: <MdHome size={24} />, path: '/home' },
    {
      label: '함께해요',
      icon: <MdCalendarMonth size={24} />,
      path: '/together',
    },
    {
      label: '',
      icon: <MdOutlineGroups size={24} />,
      path: '/group',
      disabled: true,
    },
    { label: '프로필', icon: <MdAccountCircle size={24} />, path: '/profile' },
  ];
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>...loading</div>}>
          <AppBar title='타이틀' />
          <RouteTransition>
            <Routes>
              <Route path='/' element={<Auth />} />
              <Route path='/auth/kakao/callback' element={<AuthCallback />} />
              <Route path='/onboarding' element={<OnBoarding />} />
              <Route path='/home' element={<Home />} />
              <Route path='/together' element={<Together />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </RouteTransition>
          <BottomNavigation items={navItems} />
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default AppInner;
