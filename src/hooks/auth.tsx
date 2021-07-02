import React, { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

import * as AuthSession from 'expo-auth-session';

import {
  SCOPE,
  CLIENT_ID,
  CDN_IMAGE,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from '../configs';
import api from '../services/api';

interface IUser {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type IAuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

type AuthContextData = {
  user: IUser;
  isLoading: boolean;
  signIn: () => Promise<void>;
};

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: IAuthProviderProps) {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as IAuthorizationResponse;

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        console.log('', userInfo.data);
        console.log('firstName', firstName);

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };
        setUserData(userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    }
  };

  return (
    <AuthContext.Provider value={{ user: userData, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
