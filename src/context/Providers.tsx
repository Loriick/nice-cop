import React from 'react';
import AuthProvider from './AuthProvider';
import { Routes } from '../Routes';

export function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
