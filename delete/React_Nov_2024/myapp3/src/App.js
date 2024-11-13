import './App.css';
import CompA from './Components/CompA';
import Users from './Components/Users';
import DisplayProd from './Components/DisplayProd';
import KartPage from './Components/KartPage';
function App() {
  const products = [
    {name: 'iPhone', qty: 10, description: 'Product iPhone Description', price: 100},
    {name: 'Samsung', qty: 15, description: 'Product Samsung Description', price: 90},
    {name: 'OnePlus', qty: 5, description: 'Product OnePlus Description', price: 80},
    {name: 'Sony', qty: 20, description: 'Product Sony Description', price: 70},
    {name: 'LG', qty: 25, description: 'Product LG Description', price: 60},
    {name: 'Nokia', qty: 30, description: 'Product Nokia Description', price: 50},
    {name: 'Motorola', qty: 35, description: 'Product Motorola Description', price: 40}
  ]
  return (
    <div>
      <CompA />
      <Users name="Michael"/>
      <Users name = 'Steve' />
      <Users name = 'John' />
      <Users name = 'Robert' />
      <Users />

      <KartPage items="Product 1" />
      <KartPage items="Product 2" />
      <KartPage items="Product 3" />
      <KartPage items="Product 4" />
      <KartPage items="Product 5" />
      <KartPage />










      {products.map((product, index) => {
        return <DisplayProd key={index} name={product.name} qty={product.qty} description={product.description} price={product.price} />
      })}
    </div>
  );
}

export default App;
