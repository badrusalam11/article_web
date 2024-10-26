import React, { useState, useEffect } from 'react';
import { getArticles } from '../api';
import { Card, Pagination, Container } from 'react-bootstrap';

const ITEMS_PER_PAGE = 5;

const Preview = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data.filter((article) => article.status === 'publish'));
    };
    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  return (
    <Container className="preview-page">
      <h2>Published Articles</h2>
      {currentArticles.map((article) => (
        <Card key={article.id} className="mb-3">
          <Card.Body>
            <Card.Title><h2>{article.title}</h2></Card.Title>
            <Card.Text>{article.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      <Pagination className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Preview;
