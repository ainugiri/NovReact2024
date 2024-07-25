import React from 'react';
import './User.css';
class User extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello. {this.props.uname} !!!</h1>
            </div>
        );
    }
}
export default User;