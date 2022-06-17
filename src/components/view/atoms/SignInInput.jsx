import React from 'react';
import style from "../../css/SignInStyle.module.css";

export default function SignInInput({ text, children, setInputClick }) {
    const inputClick = (e) => {
        if(e.target.value.length > 0) {
            setInputClick(false);
        } else {
            setInputClick(true);
        }
    }

    return (
        <div className={style.SignIn_input}>
            <label htmlFor="SignIn_input">
                { children !== null ? children : "" }
                <input type={text} name={text} id="SignIn_input" onChange={inputClick} autoComplete="off" />
            </label>
        </div>
    )
}
