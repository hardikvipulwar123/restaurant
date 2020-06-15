import React from 'react';
import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import { Home } from "../src/componants/Home"
import ResturantCreate from "../src/componants/RestaurantCreate"
import RestaurantDetails from "../src/componants/RestaurantDetails"
import RestaurantList from "../src/componants/RestaurantList"
import RestauratSearch from "../src/componants/RestaurantSearch"
import RestaurantUpdate from "../src/componants/RestaurantUpdate"
import { Navbar, Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">RestroHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
               
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestaurantList></RestaurantList>
        </Route>
        <Route path="/create">
          <ResturantCreate></ResturantCreate>
        </Route>
        <Route path="/search">
          <RestauratSearch></RestauratSearch>
        </Route>
        <Route path="/details">
          <RestaurantDetails></RestaurantDetails>
        </Route>
        <Route path="/update/:id"
        render={props=>(<RestaurantUpdate{...props}/> )}
        
        >
          
          
          
          
        </Route>

      </Router>

    </div>
  );
}

export default App;
