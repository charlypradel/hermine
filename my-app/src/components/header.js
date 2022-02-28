import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/grandmother.png';


export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Link to={"/"}>
                    <img id="img_Logo" src={logo} alt="Logo" />
                </Link>
            </header>
        )
    }
}

export default Header;