import React from 'react';
import { Header } from './modules/header';
import { MainContent } from './modules/mainContent';

export const App: React.FC = () => {
    return (
      <>
        <Header />
        <MainContent />
      </>
    );
};
