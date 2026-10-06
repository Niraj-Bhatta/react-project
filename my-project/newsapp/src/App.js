import './App.css';
import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import News from './Component/News';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route path="/" element={<News key="general" pagesize={9} country="us" category="general" />} />
            <Route path="/home" element={<News key="general" pagesize={9} country="us" category="general" />} />
            <Route path="/about" element={<About />} />
            <Route path="/logo" element={<News key="logo" pagesize={9} country="us" category="general" />} />
            <Route path="/general" element={<News key="general" pagesize={9} country="us" category="general" />} />
            <Route path="/entertainment" element={<News key="entertainment" pagesize={9} country="us" category="entertainment" />} />
            <Route path="/business" element={<News key="business" pagesize={9} country="us" category="business" />} />
            <Route path="/health" element={<News key="health" pagesize={9} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pagesize={9} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pagesize={9} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pagesize={9} country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
