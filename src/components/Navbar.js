import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import user from "../assets/svg/user.svg"
import search from "../assets/svg/search.svg"
import axios from "axios";
import Search from "./Search";
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: [],
            search :""
        };
    }
    onChange(event) {
        this.setState({search: event.target.value});
    }
    async componentDidMount() {
        const quizzes = (await axios.get('http://localhost:8081/quizzes')).data;
        this.setState({
            quizzes
        });
    }

    render() {
        if(this.state.search !== ""){
            let searchTab = this.state.quizzes.filter(quizz => ((quizz.name.indexOf(this.state.search)) !== -1) );
            return (
                <nav className="nav">
                    <div className="container">
                        <Link to="/"><img className="logo" src={logo} alt="Quizzy - Site Officiel des Quiz"/></Link>
                        <ul>
                            <li>
                                <div className="search">
                                    <input type="text" placeholder="Chercher un quiz" value={this.state.search} onChange={this.onChange.bind(this)}/>
                                    <button><img src={search} alt="Chercher un quiz"/></button>
                                    <div id="filtre">
                                        <Search quizzes={searchTab}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/connexion"><img src={user} alt="Connexion"/></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="nav">
                    <div className="container">
                        <Link to="/"><img className="logo" src={logo} alt="Quizzy - Site Officiel des Quiz"/></Link>
                        <ul>
                            <li>
                                <div className="search">
                                    <input type="text" placeholder="Chercher un quiz" value={this.state.search} onChange={this.onChange.bind(this)}/>
                                    <button><img src={search} alt="Chercher un quiz"/></button>
                                </div>
                            </li>
                            <li>
                                <Link to="/connexion"><img src={user} alt="Connexion"/></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }

    }
}


