import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/persons">Personnes</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


