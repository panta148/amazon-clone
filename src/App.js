import './App.css';
import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Product from './Product'
import Footer from './Footer'
import Login from './Login'
import Sdata from './Sdata'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <div className="home_row">
              <Product id={Sdata[0].id} title={Sdata[0].title} price={Sdata[0].price} rating={Sdata[0].rating} image={Sdata[0].image} />
              <Product id={Sdata[1].id} title={Sdata[1].title} price={Sdata[1].price} rating={Sdata[1].rating} image={Sdata[1].image} />

            </div>
            <div className="home_row">
              <Product id={Sdata[2].id} title={Sdata[2].title} price={Sdata[2].price} rating={Sdata[2].rating} image={Sdata[2].image} />
              <Product id={Sdata[3].id} title={Sdata[3].title} price={Sdata[3].price} rating={Sdata[3].rating} image={Sdata[3].image} />
              <Product id={Sdata[4].id} title={Sdata[4].title} price={Sdata[4].price} rating={Sdata[4].rating} image={Sdata[4].image} />

            </div>
            <div className="home_row">
              <Product id={Sdata[5].id} title={Sdata[5].title} price={Sdata[5].price} rating={Sdata[5].rating} image={Sdata[5].image} />
              <Product id={Sdata[1].id} title={Sdata[1].title} price={Sdata[1].price} rating={Sdata[1].rating} image={Sdata[1].image} />

            </div>
            <Footer />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
