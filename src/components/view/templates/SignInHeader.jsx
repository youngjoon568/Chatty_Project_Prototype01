import React from 'react';
import style from "../../css/SignInStyle.module.css";
import AppLogo from '../atoms/AppLogo';
import Inner from '../organisms/Inner';

export default function SignInHeader() {
    return (
        <header className={style.header}>
            <Inner>
                <AppLogo type="signin" />
            </Inner>
        </header>
    )
}
