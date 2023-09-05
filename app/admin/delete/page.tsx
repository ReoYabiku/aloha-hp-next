"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page() {
  const { status } = useSession();

  if (status == "authenticated") {
    return (
      <>
        <h1>Delete</h1>
        <button onClick={() => signOut()}>Sign out with Google</button>
      </>
    );
  }
  
  redirect("/api/auth/signin");
}