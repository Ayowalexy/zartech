'use client';

import * as React from 'react';
import { AppEditor } from '../../../../public/packages/src';
import { useGetPostQuery } from '../../../../public/packages/src/store/post/api';
import { AppRootLayout } from '../../../../public/packages/src/ui/layout/root-layout';

const EditorPage = ({ params }: { params: { id: string } }) => {
  const { isLoading, data } = useGetPostQuery(params.id, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  return (
    <AppRootLayout type="ROOT">
      <div className="w-full flex justify-center items-center">
        <div className="lg:w-[50%] py-12 w-[95%] lg:max-w-[1200px]">
          <AppEditor {...data} action="editing" />
        </div>
      </div>{' '}
    </AppRootLayout>
  );
};

export default EditorPage;
