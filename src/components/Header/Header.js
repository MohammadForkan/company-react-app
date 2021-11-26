import React from 'react';

const Header = () => {

    return (
        <nav className="navbar navbar-info bg-info mb-4">
            <div className="container-fluid">
                <h1 className="text-center p-5"><small style={{ color: "yellow", fontWeight: "bold" }} >BRITISH AIRWAYS</small></h1>
                <h1 style={{ color: 'black', fontSize: '40px', fontWeight: "bold" }}>Total Budget: 150 Million</h1>
            </div>
        </nav >
    );
};

export default Header;