import {React} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ArticleList = ({ articles, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article) => (
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>{article.category}</td>
            <td>
                <button> <FaEdit onClick={() => onEdit(article.id)} /></button>
              <button class="alert"><FaTrash onClick={() => onDelete(article.id)} /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleList;
