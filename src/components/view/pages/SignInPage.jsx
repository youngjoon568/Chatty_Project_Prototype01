import React from 'react';
import style from "../../css/SignInStyle.module.css";
import SignInHeader from '../templates/SignInHeader';
import SignInMain from '../templates/SignInMain';

export default function SignInPage() {
  return (
    <main className={style.SignIn}>
      <SignInHeader />
      <SignInMain />
    </main>
  )
}
