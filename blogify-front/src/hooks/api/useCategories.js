import useAsync from '../useAsync';

import * as categoryApi from '../../services/categoryApi';

export default function useCategories() {

  const {
    loading: categoriesLoading,
    error: categoriesError,
    act: useCategories,
    data: categories
  } = useAsync(() => categoryApi.getCategories());

  return {
    categoriesLoading,
    categoriesError,
    useCategories,
    categories
  };
}