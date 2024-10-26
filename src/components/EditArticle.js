// src/components/EditArticle.js
import React, { useState, useEffect } from 'react';
import { getArticles, updateArticle } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const EditArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            const data = await getArticles();
            const foundArticle = data.find(a => a.id === parseInt(id));
            setArticle(foundArticle);
        };
        fetchArticle();
    }, [id]);

    const handleUpdate = async () => {
        await updateArticle(article.id, article);
        navigate('/all-posts');
    };

    if (!article) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Article</h1>
            <input type="text" value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} />
            <textarea value={article.content} onChange={(e) => setArticle({ ...article, content: e.target.value })} />
            <input type="text" value={article.category} onChange={(e) => setArticle({ ...article, category: e.target.value })} />
            <button onClick={handleUpdate}>Publish</button>
            <button onClick={() => { setArticle({ ...article, status: 'draft' }); handleUpdate(); }}>Draft</button>
        </div>
    );
};

export default EditArticle;
