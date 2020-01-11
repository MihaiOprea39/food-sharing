import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import './header.scss';

// https://codedaily.io/tutorials/60/Create-a-useMousePosition-Hook-with-useEffect-and-useState-in-React

function TrackScroll(header) {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const decideShrink = () => {
            const scrolled = document.scrollingElement.scrollTop;
            const position = header.offsetTop;

            setShrink(scrolled > position + 90);
        };
        window.addEventListener('scroll', decideShrink);

        return () => window.removeEventListener('scroll', decideShrink);
    }, []);

    return shrink;
}

export default function Header() {
    const [shrink, setShrink] = useState(false);
    const header = useRef();

    useEffect(() => {
        // setShrink(TrackScroll(header));
    }, []);


    return (
        <header ref={header} className={`general-header ${'shrink' ? shrink : ''}`}>
            <nav>
                <div className="navbar-content">
                    <div className="navbar-text">
                        <Link to={'/'}>
                            <i className="fas fa-globe-americas"></i>
                        </Link>
                        <span>Some fancy header</span>
                    </div>
                </div>
            </nav>
        </header>

    );
}
