"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page() {
  const { status } = useSession();

  console.log(status);

  if (status == "authenticated") {
    console.log("register")
    return (
      <>
        <h1>Register</h1>
        <button onClick={() => signOut()}>Sign out with Google</button>
      </>
    );
  }

  redirect("/api/auth/signin");
}