import React from 'react';
import { Link } from 'react-router-dom';
import  { ReactComponent as Reservation } from '../../image/logo.svg';
export default function AppLogo({ type }) {
    return (
        <>
            <Link to="/" className={`logo ${type}_link`}>
                <h1 className={`${type}_logo`}>채티</h1>
                <Reservation />
            </Link>
        </>
    )
}