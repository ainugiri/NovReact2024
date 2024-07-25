import Menu from './Components/Menu';
import User from './Components/User';

// Functional Component
// Class Component
// multiple component in a file - export / default export ?
// import single  / multiple component in a file
// props - sharing data between components
// shared multiple data between components
// class component - state, lifecycle methods
// class component - render method - return statement - jsx


function App() {
    const user = ["John", "Doe", "Smith"];
    const products = ["Mobile", "Laptop", "Tablet"];
    const items = ["Apple", "Samsung", "Dell"];

    return (
    <div>
      <Menu />
      {user.map((xyz) => (  
        <User uname = {xyz} />
      )) }
    </div>
      );
}

export default App;
