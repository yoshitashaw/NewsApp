import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import backdrop from "./components/backdrop.png";

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundImage:`url(${backdrop})`}}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News key="business" country="in" category="business"/>}>
            </Route>

            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"/>}>
            </Route>

            <Route exact path="/" element={<News key="general" country="in" category="general"/>}>
            </Route>

            <Route exact path="/health" element={<News key="health" country="in" category="health"/>}>
            </Route>

            <Route exact path="/science" element={<News key="science" country="in" category="science"/>}>
            </Route>

            <Route exact path="/sports" element={<News key="sports" country="in" category="sports"/>}>
            </Route>

            <Route exact path="/technology" element={<News key="technology" country="in" category="technology"/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
