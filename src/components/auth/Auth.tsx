import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { UserState } from '../../store/atom';
import { useNavigate, useSearchParams } from 'react-router-dom';

const objectToQueryString = (obj: object) => {
  const query = Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  return query;
};

const Auth = () => {
  const [User, setUser] = useRecoilState(UserState);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const requestKakaoLogin = async () => {
      const code = searchParams.get('code');

      const obj = {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_REST_API_KEY,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        code: code,
        client_secret: process.env.REACT_APP_KAKAO_SECRET,
      };

      const query = objectToQueryString(obj);
      console.log(query);

      try {
        const {
          data: { access_token: accessToken },
        } = await axios.post('https://kauth.kakao.com/oauth/token', query);

        const {
          data: { kakao_account },
        } = await axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });

        console.log(kakao_account.email);
        navigate('/home');
      } catch (error) {}
    };

    requestKakaoLogin();
  }, [setUser, navigate, searchParams]);

  return <div>카카오 로그인 처리 중 입니다.</div>;
};

export default Auth;
