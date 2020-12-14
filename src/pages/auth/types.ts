import React from 'react';
export type AuthProps = {
  setState: React.Dispatch<
    React.SetStateAction<
      'login' | 'signup' | 'forgot-password' | 'reset-password' | 'verify-otp'
    >
  >;
};
