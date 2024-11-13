import { Component } from "react";

class Users extends Component {
    render() {
        return (
        <div>
            <h1>Users Component</h1>
            <h6>{this.props.name}</h6> 
        </div>
        );
    }
}
export default Users;