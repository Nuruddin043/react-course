import {useState} from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import Product from './product'
import ProductDetail from   './product_detail'
function App() {
  const [productList, setProductlist] = useState([
    {
      name: "Product 1",
      description: "Product description 1",
      price: 100,
      category: "category 1"
    },
    {
      name: "Product 2",
      description: "Product description 2",
      price: 200,
      category: "category 2"
    },
    {
      name: "Product 3",
      description: "Product description 3",
      price: 300,
      category: "category 3"
    },
    {
      name: "Product 4",
      description: "Product description 4",
      price: 400,
      category: "category 4"
    },
    {
      name: "Product 5",
      description: "Product description 5",
      price: 500,
      category: "category 5"
    }
])
  return (
    <Router>
      <Link to="/">Home </Link>  
      <Link to="/product-list">All Products </Link>  
      
      <br /><br /><br /><br /><br />
      <Switch>
        <Route exact path={'/'}> 
              <Product productlist={productList}/>
        </Route>
        <Route exact path={'/product-list'}> 
           <Product productlist={productList}/>
        </Route>
        <Route exact path={'/product-details/:id'}> 
            <ProductDetail productlist={productList}/>
        </Route>
        <Route exact path="/404">
            <h1>Page not found</h1>
          </Route>
        <Route path="*">
            <Redirect to="/404" />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
