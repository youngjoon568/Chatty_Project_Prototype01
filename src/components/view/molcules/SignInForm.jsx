import React, { useState } from 'react';
import style from "../../css/SignInStyle.module.css";
import SignInBtn from '../atoms/SignInBtn';
import SignInInput from '../atoms/SignInInput';
import { BiUser, BiLock } from "react-icons/bi";
import SignInIsLoginBtn from '../atoms/SignInIsLoginBtn';

export default function SignInForm() {
  const [inputOne, setInputOne] = useState(true);
  const [inputTwo, setInputTwo] = useState(true);

  const SignInForm = (e) => {
    e.preventDefault();
  }

  return (
    <form className={style.SignIn_form} onSubmit={SignInForm}>
      <SignInInput text="emali" setInputClick={setInputOne} inputOne={inputOne}>
        {
          inputOne === true ? (
            <div className={style.input_text}>
              <BiUser />
              <span>학교 이메일을 입력하세요.</span>
            </div>
          ) : null
        }
      </SignInInput>
      <SignInInput text="password" setInputClick={setInputTwo} inputTwo={inputTwo}>
        {
          inputTwo === true ? (
            <div className={style.input_text}>
              <BiLock />
              <span>비밀번호를 입력하세요.</span>
            </div>
          ) : null
        }
      </SignInInput>
      <SignInBtn type={"login"} />
      <SignInBtn />
      <SignInIsLoginBtn />
    </form>
  )
}