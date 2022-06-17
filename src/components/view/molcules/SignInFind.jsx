import React from 'react';
import SignInFindBtn from '../atoms/SignInFindBtn';
import style from "../../css/SignInStyle.module.css";

export default function SignInFind() {
    return (
        <div className={style.SignIn_find}>
            <SignInFindBtn text={"아이디"} />
            <SignInFindBtn text={"비밀번호"} />
        </div>
    )
}
