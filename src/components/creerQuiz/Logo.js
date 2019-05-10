import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <label>
                Logo:
                <input id="picture1" type="file" name="file1" required/>
            </label>
        );
    }
}

export default Logo;
