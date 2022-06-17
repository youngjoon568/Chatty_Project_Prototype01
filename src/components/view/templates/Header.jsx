import React from 'react';
import style from "../../css/HeaderStyle.module.css";
import AppLogo from '../atoms/AppLogo';
import Inner from '../organisms/Inner';

export default function Header() {
  return (
    <header className={style.header}>
      <Inner>
        <AppLogo type="header" />
      </Inner>
    </header>
  )
}
