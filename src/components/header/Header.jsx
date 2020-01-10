import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './header.scss';

/**
 * @return {boolean}
 */
function WillShrink() {
    const [hasShrinked, setHasShrink] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => setHasShrink(true));
    }, []);

    return hasShrinked;
}

// function TrackScroll() {
//     const scrolled = document.scrollingElement.scrollTop;
//     const position = header.offsetTop;
//
//     if(scrolled > position + 90){
//         header.classList.add('shrink');
//     } else {
//         header.classList.remove('shrink');
//     }
// }

export default function Header() {
    const isShrinked = WillShrink();
    return (
        <header className="general-header">
            <nav>
                <div className="navbar-content">
                    <div className="navbar-text">
                        <a href="../index.html" title="Pagina principala"><i className="fas fa-globe-americas"></i></a>
                        <span>Cele sapte minuni ale lumii</span>
                    </div>
                </div>
            </nav>
        </header>

    );
}
