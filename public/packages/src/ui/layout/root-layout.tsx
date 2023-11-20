'use client';
import * as React from 'react';
import { Header } from '../../ui/header/Header';

type RootLayoutProps = {
  children: React.ReactNode;
  type: typeof TYPE;
  showHeader?: boolean;
};

export const TYPE: 'VIEW' | 'ROOT' = 'VIEW';

export const AppRootLayout: React.FC<RootLayoutProps> = ({
  children,
  type,
}) => {
  return (
    <div className="w-full">
      {<Header type={type} />}
      <div className="pt-[40px]">{children}</div>
    </div>
  );
};
