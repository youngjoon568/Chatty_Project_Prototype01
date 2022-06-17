import React, { useEffect, useState } from 'react';
import FooterIcon from '../atoms/FooterIcon';
import Inner from '../organisms/Inner';
import style from '../../css/FooterStyle.module.css';

export default function Footer() {
    const footerArr = [
        { type: "", inputId: "btn1" },
        { type: "msg", inputId: "btn2" },
        { type: "ppl", inputId: "btn3" },
        { type: "pf", inputId: "btn4" },
    ];

    return (
        <footer className={style.footer}>
            <Inner>
                {
                    footerArr.map((item, index) => <div key={index}>
                        <FooterIcon type={item.type} inputId={item.inputId} />
                    </div>)
                }
            </Inner>
        </footer>
    )
}