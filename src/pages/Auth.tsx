import React from 'react';
import { KAKAO_AUTH_URL } from '../contents/oAuth';

const Auth = () => {
  return (
    <button onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
      카카오 로그인
    </button>
  );
};

export default Auth;
