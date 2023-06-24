import { createContext } from 'react';
import useCategories from '../hooks/api/useCategories';

const CategoryContext = createContext();
export default CategoryContext;

export function CategoryProvider({ children }) {
  const { categories } = useCategories();

  return (
    <CategoryContext.Provider value={{ categories }}>
      { children }
    </CategoryContext.Provider>
  );
}