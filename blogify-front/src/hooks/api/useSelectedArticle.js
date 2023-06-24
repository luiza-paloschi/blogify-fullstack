import useAsync from '../useAsync';

import * as articleApi from '../../services/articleApi';

export default function useSelectedArticle() {

  const {
    loading: articleLoading,
    error: articleError,
    act: selectedArticle,
    data: article
  } = useAsync((articleId) => articleApi.getArticleById(articleId), false);

  return {
    articleLoading,
    articleError,
    selectedArticle,
    article
  };
}