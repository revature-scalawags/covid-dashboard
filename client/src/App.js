import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main'
import About from './pages/About'
import Twitter from './pages/Twitter'
import Infections from './pages/Infections'
import './App.css';


export default function App() {
  return (
    <Router >
      <Navbar />
      <Route exact path="/"><Main /></Route>
      <Route exact path="/about" ><About /></Route>
      <Route exact path="/twitter" ><Twitter /></Route>
      <Route exact path="/infections" ><Infections /></Route>
    </Router>
  );
}