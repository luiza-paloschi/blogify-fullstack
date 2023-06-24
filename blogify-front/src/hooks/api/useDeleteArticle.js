import useAsync from '../useAsync';
import useToken from '../useToken';

import * as articleApi from '../../services/articleApi';

export default function useDeleteArticle() {
  const token = useToken();

  const {
    loading: deleteArticleLoading,
    error: deleteArticleError,
    act: deleteArticle
  } = useAsync((data) => articleApi.deleteArticle(data, token), false);

  return {
    deleteArticleLoading,
    deleteArticleError,
    deleteArticle
  };
}