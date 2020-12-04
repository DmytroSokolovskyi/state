import React, {Component} from 'react';
import User from "../user/User";

class Users extends Component {

    state = {users: [], clickUser: null};


    clickUser = (id) => {
       let {users} = this.state;
       let click = users.find(value => value.id === id);
       this.setState({clickUser: click})
    };


    render() {

        let {users, clickUser} = this.state;
        console.log(users);
        return (
            <div>
                {users.map(user => <User item={user} key={user.id} clickUser={this.clickUser}/>)}
                {
                    clickUser && <h2>{clickUser.id} {clickUser.name}</h2>
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});
            });
    }
}

export default Users;
