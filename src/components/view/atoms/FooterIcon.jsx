import React from 'react';
import { AiFillMessage } from "react-icons/ai";
import { BsFillPeopleFill, BsPersonCircle } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
import style from '../../css/FooterStyle.module.css';

export default function FooterIcon({ type, inputId }) {

    return (
        <button className={`${style.footer_icon}`}>
            <label htmlFor={inputId}>
                <Link to={`/${type}`}>
                    {
                        type === "msg" ? (<AiFillMessage />) : (type === "ppl" ? (<BsFillPeopleFill />) : (type === "pf" ? (<BsPersonCircle />) : (type === "" ? (<MdHomeFilled />) : null)))
                    }
                </Link>
            </label>
        </button>
    )
}
