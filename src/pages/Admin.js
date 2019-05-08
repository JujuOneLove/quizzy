import React from 'react';
import Buble from "../components/Buble";
import Login from "./Login";
import Error from "./Error401";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.checkConnexion = () => console.log("no connexion");
        if (this.props.checkConnexion) {
            this.checkConnexion = this.props.checkConnexion
        }
    }
    logout() {
        sessionStorage.clear();
        this.setState({
            user: Login.getUser(),
            authenticated: false,
        });
        this.checkConnexion(false);
    };

    render() {
        if (!Login.getUser()) {
            return (
                <Error/>
            );
        } else return (
            <div className="container">
                <Buble/>
                <div className="content">
                    <p>test</p>
                    <button type="button" name="logout" className="btn btn-secondary"
                            onClick={() => this.logout()}>logout
                    </button>
                </div>
            </div>
        )
    }
}

export default Admin;
