// Edit.js
import React, { useEffect, useState } from 'react';
import { updateArticle, getArticleById } from '../api'; // assuming you have a getArticleById API call
import ArticleForm from '../components/ArticleForm';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams(); // Retrieve the article ID from the URL
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await getArticleById(id); // Fetch the article by ID
      console.log("getarticlebyId",data)
      setArticle(data);
    };

    if (id) fetchArticle();
  }, [id]);

  const handleSubmit = async (updatedArticle) => {
    await updateArticle(id, updatedArticle); // You might want to change this if you're updating instead of creating
    navigate('/all-posts');
  };

  return (
    <div>
      <h2>Edit Article</h2>
      {article ? (
        <ArticleForm onSubmit={handleSubmit} article={article} /> // Pass initial data to the form
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Edit;
