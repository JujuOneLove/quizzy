import React from 'react';
import axios from "axios";
import { Route, Link } from 'react-router-dom';

import {HTTP_SERVER_PORT} from "../constants";
import Buble from "../components/Buble";
import ListQuizz from "../components/List-Quizz";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.checkConnexion = () => console.log("no connexion");
        if (this.props.checkConnexion) {
            this.checkConnexion = this.props.checkConnexion
        }
        this.state = {
            user: Login.getUser(),
            authenticated: false,
            quizzes: [],
        };
        this.login();
    }
    logout() {
        sessionStorage.clear();
        this.setState({
            user: Login.getUser(),
            authenticated: false,
        });
        this.checkConnexion(false);
    };
    async getQuizzes() {
        const quizzes = (await axios.get('http://localhost:8081/quizzes/user/'+this.state.user.username));
        this.setState({
            quizzes: quizzes
        });
    }
    login() {
        if (this.state.user) {
            axios.post(HTTP_SERVER_PORT + 'login', this.state.user)
                .then(res => {
                    if (res.data.isConnected) {
                        this.setUser(this.state.user);
                        this.setState({authenticated: true});
                        this.checkConnexion(true);
                    }
                })
            this.getQuizzes();
        }
    };

    signUp() {
        axios.post(HTTP_SERVER_PORT + 'signUp', this.state.user)
            .then(res => {
                if (res.data.isConnected) this.login()
            });
    };

    setUser() {
        sessionStorage.setItem('username', this.state.user.username);
        sessionStorage.setItem('password', this.state.user.password);
    };

    // --- static methods ---
    static getUser() {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
            return ({
                username: sessionStorage.getItem('username'),
                password: sessionStorage.getItem('password')
            })
        }
        return null;
    };

    // --- form methods
    handleForm(e) {
        e.preventDefault();
        this.login();
    };

    setUsername(e) {
        const user = this.state.user || {};
        user.username = e.target.value;
        this.setState({user:user})
    }

    setPassword(e) {
        const user = this.state.user || {};
        user.password = e.target.value;
        this.setState({user:user})
    }

    render() {
        if (this.state.user && this.state.authenticated) {
            return (
                <div className="container admin">
                    <div className="content">
                        <div className="header">
                            <h1>{this.state.user.username}</h1>
                            <button type="button" name="logout" className="btn btn-secondary"
                                    onClick={() => this.logout()}>logout
                            </button>
                        </div>
                        <ListQuizz quizzes={this.state.quizzes.data}/>
                        <div className="creer">
                            <Link className="btn" to="/creer/quiz">Creer quizz</Link>
                        </div>
                    </div>
                </div>
            );
        }else {
            return (
                <div className="container">
                    <Buble/>
                    <div className="content connexion">
                        <form className="connexion" onSubmit={e => this.handleForm(e)}>
                            <div>
                                <label>Identifiant :</label>
                                <input type="text" id="username"
                                       onChange={e => this.setUsername(e)}/>
                            </div>
                            <div>
                                <label>Mot de passe:</label>
                                <input type="password" id="password" name="password"
                                       onChange={e => this.setPassword(e)}/>
                            </div>
                            <div className="flex wrap">
                                <button name="signup" onClick={() => this.signUp(this.state.user)}>S'inscrire</button>
                                <button type="submit" name="login">Connexion</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

    }
}

export const
    ProtectedRoute = (props) => {
        if (Login.getUser())
            return (<Route exact={props.exact} path={props.path} component={props.component}/>);
        return null;
    };

export default Login;
