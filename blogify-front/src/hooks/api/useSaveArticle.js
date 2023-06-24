import useAsync from '../useAsync';
import useToken from '../useToken';

import * as articleApi from '../../services/articleApi';

export default function useSaveArticle() {
  const token = useToken();

  const {
    loading: saveArticleLoading,
    error: saveArticleError,
    act: saveArticle
  } = useAsync((data) => articleApi.postArticle(data, token), false);

  return {
    saveArticleLoading,
    saveArticleError,
    saveArticle
  };
}