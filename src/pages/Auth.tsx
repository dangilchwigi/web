import React from 'react';

const Auth = () => {
  return (
    <button
      onClick={() =>
        (window.location.href = `${process.env.REACT_APP_KAKAO_AUTH_URL}`)
      }
    >
      카카오 로그인
    </button>
  );
};

export default Auth;
