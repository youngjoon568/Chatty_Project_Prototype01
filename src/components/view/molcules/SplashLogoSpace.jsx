import React from 'react'
import AppLogo from '../atoms/AppLogo'
import SplashSubText from '../atoms/SplashSubText';
import style from '../../css/SplashStyle.module.css';

export default function SplashLogoSpace() {
  return (
    <div className={style.splash_logos}>
        <SplashSubText />
        <AppLogo type="splash" />
    </div>
  )
}
