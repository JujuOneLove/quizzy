import React, {Component} from 'react';

class Nom extends Component {
    render() {
        return (
            <label>
                Nom
                <input
                    name="name"
                    type="test"
                    value={this.props.name}
                    onChange={this.props.handleInputChange}
                    required/>
            </label>
        );
    }
}

export default Nom;
