import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

const Timeline = () => (
  <div className="p-10 text-center font-bold text-xl">
    Timeline Page
  </div>
);

const Stats = () => (
  <div className="p-10 text-center font-bold text-xl">
    Friendship Analytics (Stats) Page
  </div>
);

const FriendDetails = () => (
  <div className="p-10 text-center font-bold text-xl">
    Friend Details Page
  </div>
);

const NotFound = () => (
  <div className="p-10 text-center font-bold text-xl text-red-500">
    404 - Page Not Found
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/friend/:id" element={<FriendDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
