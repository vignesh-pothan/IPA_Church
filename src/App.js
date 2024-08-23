import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import About from "./pages/About";
import OurMinistries from "./pages/OurMinistries";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SongDetail from "./pages/SongDetail";
import Song from "./pages/Song";

import PromiseComponent from "./pages/Promise";

const App = () => {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<OurMinistries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media/songs" element={<Song />} />
          <Route path="/media/songs/:songId" element={<SongDetail />} />
          <Route path="/media/promise" element={<PromiseComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
