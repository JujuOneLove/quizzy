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
                        <Link to="/persons">Personnes</Link>
                    </li>
                    <li>
                        <Link to="/quotes">Quotations</Link>
                    </li>
                    <li>
                        <Link to="/error">Test Error</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}


