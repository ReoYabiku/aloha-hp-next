"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation';

export default function Page() {
  const { status } = useSession();
  const router = useRouter();

  if (status == "authenticated") {
    return (
      <>
        <h1>Delete</h1>
        <button onClick={() => router.push("/admin/edit")}>Go to Edit Page</button>
        <br />
        <button onClick={() => signOut()}>Sign out with Google</button>
      </>
    );
  }
  
  if (status == "unauthenticated") {
    redirect("/api/auth/signin");
  }
}