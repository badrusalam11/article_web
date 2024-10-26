import React, { useState, useEffect } from 'react';

const ArticleForm = ({ article, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('draft');

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
      setCategory(article.category);
      setStatus(article.status);
    }
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title (must be minimum 20 character)"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content (must be minimum 200 character)"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="draft">Draft</option>
        <option value="publish">Publish</option>
        {/* <option value="trash">Trashed</option> */}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
