// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllPosts from './pages/AllPosts';
import AddNew from './pages/AddNew';
import Preview from './pages/Preview';
import Edit from './pages/Edit';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/edit/:id" element={<Edit />} /> {/* Updated Route */}
        <Route path="/preview" element={<Preview />} />
        <Route path="/" element={<AllPosts />} />
      </Routes>
    </Router>
  );
};

export default App;
