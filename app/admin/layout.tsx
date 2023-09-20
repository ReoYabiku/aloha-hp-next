"use client"

import { SessionProvider } from 'next-auth/react';

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <SessionProvider>
      <div style={{marginLeft: "50px"}}>
        {children}
      </div>
    </SessionProvider>
  );
}