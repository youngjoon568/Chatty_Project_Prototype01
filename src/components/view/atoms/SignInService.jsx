import React from 'react';
import { Link } from 'react-router-dom';
import style from "../../css/SignInStyle.module.css";

export default function SignInService() {
  return (
    <p className={style.signin_service}>고겍센터 <Link to="/service"><button>문의하기</button></Link></p>
  )
}
