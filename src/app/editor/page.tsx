import * as React from 'react';
import { AppEditor } from '../../../public/packages/src';
import { AppRootLayout } from '../../../public/packages/src/ui/layout/root-layout';

const EditorPage = () => {
  return (
    <AppRootLayout type="ROOT">
      <div className="w-full flex justify-center items-center">
        <div className="lg:w-[50%] py-12 w-[95%] lg:max-w-[1200px]">
          <AppEditor action='creating' />
        </div>
      </div>{' '}
    </AppRootLayout>
  );
};

export default EditorPage;
