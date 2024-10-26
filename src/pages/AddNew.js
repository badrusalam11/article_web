import React from 'react';
import { createArticle } from '../api';
import ArticleForm from '../components/ArticleForm';
import { useNavigate } from 'react-router-dom';

const AddNew = () => {
  const navigate = useNavigate();

  const handleSubmit = async (article) => {
    await createArticle(article);
    navigate('/all-posts');
  };

  return (
    <div>
      <h2>Add New Article</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddNew;
