import React, { useState, useEffect } from 'react';
import { getArticles, deleteArticle } from '../api';
import ArticleList from '../components/ArticleList';
import Tabs from '../components/Tabs';
import { useNavigate } from 'react-router-dom';

const AllPosts = () => {
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState('Published');
  const navigate = useNavigate(); // Correctly using useNavigate

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    if (activeTab === 'Published') return article.status === 'publish';
    if (activeTab === 'Drafts') return article.status === 'draft';
    if (activeTab === 'Trashed') return article.status === 'trash';
    return false;
  });

  // Corrected handleEdit function
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Use navigate directly instead of navigate.push
  };

  const handleDelete = async (id) => {
    var confirm = window.confirm("Delete?")
    if (confirm) {
      await deleteArticle(id);
      setArticles(articles.filter((article) => article.id !== id));
    }
  };

  return (
    <div>
      <a href='/add-new'>Add new posts</a>
      <Tabs tabs={['Published', 'Drafts', 'Trashed']} setActiveTab={setActiveTab} />
      <ArticleList articles={filteredArticles} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AllPosts;
