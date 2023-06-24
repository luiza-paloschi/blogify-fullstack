import useAsync from '../useAsync';

import * as articleApi from '../../services/articleApi';

export default function useAllArticles() {

  const {
    loading: allArticlesLoading,
    error: allArticlesError,
    act: useAll,
    data: allArticles
  } = useAsync((currentPage) => articleApi.getAllArticles(currentPage), false);

  return {
    allArticlesLoading,
    allArticlesError,
    useAll,
    allArticles
  };
}