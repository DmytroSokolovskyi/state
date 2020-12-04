import React, {Component} from 'react';
import Button from "./button/Button";

class User extends Component {
    render() {
        let {item, clickUser} = this.props;
        return (
            <div>
                {<div>{item.id} - {item.name}</div>}
                <Button clickUser={clickUser} id={item.id}/>
            </div>
        );
    }
}

export default User;