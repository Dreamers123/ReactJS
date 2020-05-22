import React from 'react';
import './header.css';

const header=()=>{
    return(
            <div>
                <header>
            <div className="container">
                <div id="branding">
                    <h1><span class="highlight">Prionty</span> Web Design</h1>
                </div>
                <nav>
                    <ul>
                        <li class="current"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="service.html">Services</a></li>
                    </ul>
                </nav>
            </div>
                </header>
            </div>
    );
}

export default header;
