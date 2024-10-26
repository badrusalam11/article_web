import axios from 'axios';

const API_URL = 'http://localhost:1214';

export const getArticles = async () => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data.data;
};

export const getArticleById = async (id) => {
  const response = await axios.get(`${API_URL}/article/${id}`);
  return response.data.data;
};

export const createArticle = async (article) => {
  try {
    const response = await axios.post(`${API_URL}/article`, article);
    return response.data.data;
    
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      console.log(error)
      if (status!==200) {
        alert("failed to create")
      }
    }
  }
};

export const updateArticle = async (id, article) => {
  const response = await axios.put(`${API_URL}/article/${id}`, article);
  return response.data.data;
};

export const deleteArticle = async (id) => {
  await axios.delete(`${API_URL}/article/${id}`);
};
