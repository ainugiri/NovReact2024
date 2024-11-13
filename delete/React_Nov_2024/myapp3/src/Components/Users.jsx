function Users(props) {
        return (
        <div>
            <h1>Users Component</h1>
            <h6>{props.name}</h6> 
        </div>
        );
}
Users.defaultProps = {
    name: 'XXXXXX'
}
export default Users;
