import React from 'react';
import style from "../../css/SignInStyle.module.css";
import { FcGoogle } from "react-icons/fc";

export default function SignInBtn({ type }) {
  return (
    <>
      {
        type === "login" ? (<button className={style.SignIn_btn}><span>로그인</span></button>) : (<button className={style.google_btn}><FcGoogle /><span>구글 로그인</span></button>)
      }
    </>
  )
}
