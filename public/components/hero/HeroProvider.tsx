'use client';
import * as React from 'react';
import { ReactNode } from 'react';

export const HeroProvider = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);
