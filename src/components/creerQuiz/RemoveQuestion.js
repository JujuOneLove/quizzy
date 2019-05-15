import React, {Component} from 'react';

export default class RemoveQuestion extends Component {
    render() {
        return (
            <div className="flex wrap">

                <button
                    type="button"
                    onClick={this.props.handleRemoveQuestion(this.props.id)}
                >
                    Supprimmer
                </button>
            </div>
        );
    }
}
