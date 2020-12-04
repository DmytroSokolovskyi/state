import React, {Component} from 'react';

class Button extends Component {
    render() {
 let {clickUser, id} = this.props
        return (
            <div>
                <button onClick={() =>clickUser(id)} >CLICK</button>
            </div>
        );
    }
}

export default Button;