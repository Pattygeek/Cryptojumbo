import React from 'react';
export type AuthTypes =
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'reset-password'
  | 'verify-otp'
  | 'verify-email';
export type AuthProps = {
  setState: React.Dispatch<React.SetStateAction<AuthTypes>>;
  state?: AuthTypes;
};
