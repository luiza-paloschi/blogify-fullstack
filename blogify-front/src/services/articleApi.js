import api from './api';

export async function postArticle(body, token) {
  const response = await api.post('/articles', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function deleteArticle(articleId, token) {
  const response = await api.delete(`/articles/delete/${articleId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
}

export async function getUserArticles(userId) {
  const response = await api.get(`/articles/user/${userId}`);
  return response.data;
}

export async function getArticles() {
    const response = await api.get('/articles/recent');
    return response.data;
}

export async function getAllArticles(currentPage) {
  const response = await api.get('/articles/all', {
    params: {
      page: currentPage,
    },
  });
  
  return response.data;
}

export async function getArticleById(articleId) {
  const response = await api.get(`/articles/${articleId}`);
  return response.data;
}

export async function getByCategoryId(categoryId, currentPage) {
  const response = await api.get(`/articles/category/${categoryId}`, {
    params: {
      page: currentPage,
    },
  });
  return response.data;
}