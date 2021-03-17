import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import Home from './containers/home';
import Services from './containers/services';
import About from './containers/about';
import NotFound from './containers/not_found';
import Layout from './components/layout'

function App() {
  return (
    <Router>
    <Layout>

    <Switch>
        <Route exact path={'/'} >
          <Home />
        </Route>
        <Route exact path={'/services'} >
          <Services />
        </Route>
        <Route exact path={'/about'} >
          <About />
        </Route>
        <Route exact path={'/404'} >
          <NotFound />
        </Route>
        <Route  path={'*'} >
          <Redirect to={'/404'} />
        </Route>
    
      </Switch>
    </Layout>


    </Router>
  );
}

export default App;
