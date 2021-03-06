import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import Product from './product'
import ProductDetail from   './product_detail'
import CreateProduct  from './createproduct'
import UpdateProduct from './product_update'

function App() {
  
  return (
    <Router>
      <Link to="/">Home </Link>  
      <Link to="/create_product">Create Products </Link>  
      
      <br /><br /><br /><br /><br />
      <Switch>
        <Route exact path={'/'}> 
              <Product />
        </Route>
        <Route exact path={'/create_product'}> 
           <CreateProduct />
        </Route>
        <Route exact path={'/product-details/:id'}> 
            <ProductDetail />
        </Route>
        <Route exact path={'/update_product/:id'}> 
            <UpdateProduct />
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
