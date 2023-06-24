import useAsync from '../useAsync';

import * as articleApi from '../../services/articleApi';

export default function useUserArticles() {

  const {
    loading: userArticlesLoading,
    error: userArticlesError,
    act: getUserArticles,
    data: userArticles
  } = useAsync((data) => articleApi.getUserArticles(data), false);

  return {
    userArticlesLoading,
    userArticlesError,
    getUserArticles,
    userArticles
  };
}