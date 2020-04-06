import React from 'react';

import './App.css';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Main from './components/main';
import Shop from './components/shop';
import  Readcart from './components/readcart';

class App extends React.Component {

  render() {
    return (
  
  <BrowserRouter>
     <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
             
              <Nav.Link href="/main">Main</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/Readcart">Cart</Nav.Link>
              </Nav>
        </Navbar>
        <Switch>
          
        <Route path="/Main" component={Main} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Readcart" component={Readcart} />
        </Switch>
        </div>
        </BrowserRouter>

);
}
}
export default App;
