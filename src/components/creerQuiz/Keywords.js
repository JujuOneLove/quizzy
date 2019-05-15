import React, {Component} from 'react';
import Select from 'react-select'
class Keywords extends Component {
    render() {
        return (
            <label>
                Mots clés:
                <Select
                    isMulti
                    name="keyword"
                    className="select"
                    placeholder={""}
                    onChange={this.props.handleOnChangeKeywords}
                    options={this.props.options}
                />
            </label>
        );
    }
}

export default Keywords;
