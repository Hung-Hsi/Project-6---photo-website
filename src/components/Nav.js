import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <div className="title">
                <h2>Practice project</h2>
                <h3>Photo-website</h3>
            </div>
                <ul>
                <li><Link to="/photo-website/">Home</Link></li>
                <li><Link to="/photo-website/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav 
