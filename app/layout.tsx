import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Providers } from '@/lib/store/providers';
import { StyledEngineProvider } from '@mui/material/styles';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './globals.css';

export const metadata: Metadata = {
  title: 'Movie Search App',
  icons: '/favicon.png'
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <StyledEngineProvider injectFirst>
          <body className="bg-neutral-50">
            <Suspense>
              <div className="flex flex-col justify-between min-h-screen">
                <Header />
                <main className='flex-1'>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  {children}
                </main>
                <Footer />
              </div>
            </Suspense>
          </body>
        </StyledEngineProvider>
      </Providers>
    </html>
  );
}
