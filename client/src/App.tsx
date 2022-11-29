import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Suggestions from './pages/Suggestions';
import FeedBackDetail from './pages/FeedBackDetail';
import EditFeedBack from './pages/EditFeedBack';
import NewFeedback from './pages/NewFeedback';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <div className="App min-h-screen bg-slate-200">
      <NavBar />
      <Routes>
        <Route path="/" element={<Suggestions />} />
        <Route path="/new-feedback" element={<NewFeedback />} />
        <Route path="/edit-feedback" element={<EditFeedBack />} />
        <Route path="/feedback-detail/:id" element={<FeedBackDetail />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </div>
  );
}

export default App;
