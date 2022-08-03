
import React from 'react';
import Navbar from './componnent/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import './componnent/Home';
import Home from './componnent/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
       <Routes>
        <Route exact = "/" component={Home}>
        </Route>
       </Routes>
    </Router>
  </>
  );
}

export default App;
