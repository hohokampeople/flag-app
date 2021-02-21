import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">myflags.com</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Flags</a></li>
                            <li className="nav-item"><a className="nav-link active" href="#">Login</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header