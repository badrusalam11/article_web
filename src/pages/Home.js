// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate('/add-new'); // Change to the path for adding a new article
  };

  return (
    <div>
      <h1>Welcome to the Article Web</h1>
      <button onClick={handleAddNew}>Add New Article</button>
      {/* Other content */}
    </div>
  );
};

export default Home;
