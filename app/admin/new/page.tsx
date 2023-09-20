"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const { status } = useSession();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState("none");

  if (status == "authenticated") {

    return (
      <section>
        <h1>HP記載情報の新規登録手順</h1>
        <ol>
          <li>
            <label htmlFor="category-select">
              <h2>新規登録する項目を選択してください</h2>
            </label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              name="categories"
              id="category-select"
            >
              <option value="none">-- 選択してください --</option>
              <option value="members">メンバー紹介</option>
              <option value="documents">資料一覧</option>
              <option value="activities">活動実績</option>
            </select>
          </li>
          <li>
            <h2>新規登録対象を選択してください</h2>
            {(() => {
              switch (selectedCategory) {
                case "members":
                  return <p>メンバーの新規登録は未実装です</p>
                case "documents":
                  return <p>資料一覧の新規登録は未実装です</p>;
                case "activities":
                  return <p>活動実績の新規登録は未実装です</p>
                default:
                  return <p>未選択</p>
              }
            })()}
          </li>
        </ol>
        <button onClick={() => router.push("/admin/delete")}>Go to Delete Page</button>
        <br />
        <button onClick={() => signOut()}>Sign out with Google</button>
      </section>
    );
  }

  if (status == "unauthenticated") {
    redirect("/api/auth/signin");
  }
}