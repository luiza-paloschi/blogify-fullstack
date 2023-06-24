import useAsync from '../useAsync';

import * as articleApi from '../../services/articleApi';

export default function useByCategory() {

  const {
    loading: categoryArticlesLoading,
    error: categoryArticlesError,
    act:  useCategoryArticles,
    data: categoryArticles
  } = useAsync((categoryId, currentPage) => articleApi.getByCategoryId(categoryId, currentPage), false);

  return {
    categoryArticlesLoading,
    categoryArticlesError,
    useCategoryArticles,
    categoryArticles
  };
}