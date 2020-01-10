import {Link} from "react-router-dom";
import React from "react";
import '../styles/header.scss';

export default function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/pick-up">Pick-up</Link>
            </li>
        </ul>
    );
}
