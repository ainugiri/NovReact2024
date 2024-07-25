import Purchase from "./Comp/Purchase";
import LikeComponent from "./StComp/LikeComponent";
// Functional Component
// Class Component
// multiple component in a file - export / default export ?
// import single  / multiple component in a file
// props - sharing data between components
// shared multiple data between components
// class component - state, lifecycle methods
// class component - render method - return statement - jsx

const purchaseItems = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    date: new Date(2021, 7, 1),
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    date: new Date(2021, 8, 2),
  },
  {
    id: 3,
    name: "Tablet",
    price: 10000,
    date: new Date(2021, 9, 3),
  },
];

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <p></p>
     {purchaseItems.map((item) => (
        <Purchase key={item.id} name={item.name} price={item.price} date={item.date} />
      ))}

      <LikeComponent xyz="0" />
    </div>
  );
}

export default App;
