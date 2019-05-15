import React, {Component} from 'react';

class AddQuestion extends Component {
    render() {
        return (
            <button
                type="button"
                onClick={this.props.handleAddQuestion}
            >
                Ajouter une question
            </button>
        );
    }
}

export default AddQuestion;
