import React from 'react';
import style from "../../css/SignInStyle.module.css";

export default function SignInFindBtn({ text }) {
  return (
      <button className={style.find_btn}><span>{text} 찾기</span></button>
  )
}
