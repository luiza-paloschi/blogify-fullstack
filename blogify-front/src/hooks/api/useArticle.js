import useAsync from '../useAsync';

import * as articleApi from '../../services/articleApi';

export default function useArticles() {

  const {
    loading: articlesLoading,
    error: articlesError,
    act: useArticles,
    data: articles
  } = useAsync(() => articleApi.getArticles());

  return {
    articlesLoading,
    articlesError,
    useArticles,
    articles
  };
}