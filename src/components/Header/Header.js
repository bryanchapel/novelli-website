import React from 'react';
import './Header.css';

const header = () => {
    return (
        <header className="App-header">
            <h1>
                <span className="heading-hash">#</span> NOVELLI&nbsp;<span className="cursor"> </span>
            </h1>
            <h2>
                <strong>NOVELLI</strong> <em>[nov uh lee]</em> : A minimal, distraction free writing application for Mac OS, Windows, and Linux.
            </h2>
        </header>
    );
};

export default header;
