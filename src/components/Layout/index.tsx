import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <header className="py-2 px-6 mx-auto max-w-screen-2xl flex justify-start items-center border-b border-accents-2">
        <img className="h-12 w-auto" src="/img/logo.png" alt="" />
      </header>
      <main className="px-6 mt-8 mx-auto max-w-screen-2xl">
        {children}
      </main>
    </>
  );
};

export default Layout;
