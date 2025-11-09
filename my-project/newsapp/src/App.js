import './App.css';
import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import News from './Component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route exact  path="/logo" element={<News key="general" pagesize={9} country="us" category="general" />} />
             <Route  exact path="/general" element={<News key="general" pagesize={9} country="us" category="general" />} />
            <Route exact  path="/entertainment" element={<News key="entertainment" pagesize={9} country="us" category="entertainment" />} />
            <Route  exact path="/business" element={<News key="business" pagesize={9} country="us" category="business" />} />
            <Route exact  path="/health" element={<News key="health" pagesize={9} country="us" category="health" />} />
            <Route exact  path="/science" element={<News key="science" pagesize={9} country="us" category="science" />} />
            <Route  exact path="/sports" element={<News key="sports" pagesize={9} country="us" category="sports" />} />
            <Route  exact path="/technology" element={<News key="technology" pagesize={9} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
