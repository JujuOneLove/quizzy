import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import user from "../assets/svg/user.svg"
import search from "../assets/svg/search.svg"
import axios from "axios";
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: [],
            search :"",
            btn: false
        };
    }
    onChange(event) {
        this.setState({search: event.target.value});
    }
    onClick() {
        this.setState({btn: !this.state.btn});
    }
    async componentDidMount() {
        const quizzes = (await axios.get('http://localhost:8081/quizzes')).data;
        this.setState({
            quizzes
        });
    }

    render() {
            let searchFilter = this.state.quizzes.filter(quizz => ((quizz.name.indexOf(this.state.search)) !== -1) );
            let searchTab = searchFilter.map(quiz => <li key={quiz._id}><Link to={"/jouer/"+quiz._id}>{quiz.name}</Link></li>);
            return (
                <nav className="nav">
                    <div className="container">
                        <Link to="/"><img className="logo" src={logo} alt="Quizzy - Site Officiel des Quiz"/></Link>
                        <ul>
                            <li>
                                <div className="search">
                                    <input type="text" placeholder="Chercher un quiz" value={this.state.search} onChange={this.onChange.bind(this)}/>
                                    <button onClick={this.onClick.bind(this)}><img src={search} alt="Chercher un quiz"/></button>
                                    <div id="filtre" className={this.state.search ? "active" : this.state.btn ? "mobile" : ""}>
                                        <div className="filter container">
                                            <ul>
                                                <li><input type="text" placeholder="Chercher un quiz" value={this.state.search} onChange={this.onChange.bind(this)}/></li>
                                                {this.state.search ? searchTab : null}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/admin"><img src={user} alt="Connexion"/></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            );
        }
}


