"use client";

import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './slice';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
