import '@/styles/globals.css' 
import React from 'react';
import { AppProps } from 'next/app';

interface MyAppProps extends AppProps {
  Component: React.ComponentType;
}

const App: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
