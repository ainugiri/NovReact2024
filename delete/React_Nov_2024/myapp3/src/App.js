import './App.css';
// import CompA from './Components/CompA';
// import Users from './Components/Users';
// import DisplayProd from './Components/DisplayProd';
// import KartPage from './Components/KartPage';
import CompX from './Components/CompX';
import CompY from './Components/CompY';
function App() {
  // const products = [
  //   {name: 'iPhone', qty: 10, description: 'Product iPhone Description', price: 100},
  //   {name: 'Samsung', qty: 15, description: 'Product Samsung Description', price: 90},
  //   {name: 'OnePlus', qty: 5, description: 'Product OnePlus Description', price: 80},
  // ]
  // return (
  //   <div>
  //     <CompA />
  //     <Users name="Michael"/>

  //     <KartPage items="Product 1" />
  //     <KartPage items="Product 2" />
  //     <KartPage items="Product 4" />
  //     <KartPage items="Product 5" />
  //     <KartPage />










  //     {products.map((product, index) => {
  //       return <DisplayProd key={index} name={product.name} qty={product.qty} description={product.description} price={product.price} />
  //     })}
  //   </div>
  // );
  return (
    <div>
        <CompX />
          <hr />
        <CompY />
    </div>
  );
}

export default App;
