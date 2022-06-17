import React from 'react';
import style from "../../css/SignInStyle.module.css";
import SignInService from '../atoms/SignInService';
import SignInFind from '../molcules/SignInFind';
import SignInForm from '../molcules/SignInForm';
import Inner from '../organisms/Inner';

export default function SignInMain() {
  return (
    <main className={style.SignIn_main}>
      <Inner>
        <SignInForm />
        <SignInFind />
        <SignInService />
      </Inner>
    </main>
  )
}
