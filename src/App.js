import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Hero from './components/hero';
import ProductsHome from './components/ProductsHomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <ProductsHome/>
    {/* <Login/> */}
    </div>
  );
}

export default App;
