import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Menu from './component/header/Menu';
import Footer from './component/footer/Footer';
import Front from './component/front/Front';
import Study from './component/study/Study';
import DynamicTestPage from './component/study/DynamicTestPage';
import Job from './component/job/Job'
import IELTS from './component/ielts/IELTS';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        {/* <IELTS /> */}
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/Study" element={<Study />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/IELTS" element={<IELTS />} />
          <Route path="/tests/:category" element={<DynamicTestPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
