import styles from './page.module.css';
import { BlogPost, Hero } from '../../public/components';
import { AppRootLayout } from '../../public/packages/src/ui/layout/root-layout';
import { RootContextProvider } from '../../public/context/root.context';

export default async function Index() {
  return (
    <RootContextProvider>
      <AppRootLayout type='ROOT'>
        <Hero />
        <BlogPost />
      </AppRootLayout>
    </RootContextProvider>
  );
}
