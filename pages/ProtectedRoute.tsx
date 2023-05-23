import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../auth/Store';

export default function ProtectedRoute ({ children }) {
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/sign-in');
//     }
//   }, [isAuthenticated, router]);

  return <>{children}</>;
};

