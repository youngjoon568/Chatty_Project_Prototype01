import React from 'react';
import { Link } from 'react-router-dom';
import style from "../../css/SignInStyle.module.css";

export default function SignInSignBtn() {
    return (
        <p className={style.sign_btn}>아직 계정이 없으신 가요? <Link to="/signup"><button>회원가입</button></Link></p>
    )
}
