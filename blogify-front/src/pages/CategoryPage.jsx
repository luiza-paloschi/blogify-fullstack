import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useContext, useEffect, useState } from "react";
import ArticleCardAll from "../components/All/ArticleCardAll";
import Navigation from "../components/All/Navigation";
import CategoryContext from "../contexts/CategoryContext";
import { useParams } from 'react-router-dom';
import useByCategory from "../hooks/api/useByCategory";


export default function CategoryPage(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('page')) || 1
  );
  const { categoryId } = useParams();
  const { categories } = useContext(CategoryContext);
  const [chosenCategory, setChosenCategory] = useState('') ;

  const { useCategoryArticles } = useByCategory();
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtigos = async () => {
      try {
        const response = await useCategoryArticles(categoryId, currentPage)
        setArticles(response.articles);
        setTotalPages(response.totalPages);

      } catch (error) {
        console.error(error);
      }
    };
    fetchArtigos();
  }, [currentPage]); 

  useEffect(() => {
    if (categories) setChosenCategory(categories?.filter((cat) => cat.id === Number(categoryId)));
    }, [categories])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate({ search: `?page=${pageNumber}` });
  };

    return (
            <Layout>
                    <div className="max-w-4xl w-full mx-auto px-4 mt-8 mb-10">
                        <h1 className="text-4xl font-serif font-bold mb-2">Category: {chosenCategory[0]?.name}</h1>
                        <div className="border-b-2 border-solid border-gray-300 pb-2 mb-8"></div>
                        {articles.length > 0 ?
                            articles?.map((article) => (
                                <ArticleCardAll key={article.id} article={article} />
                            ))
                            :
                            <p>There are no articles in this category</p>
                        }
                        {totalPages > 1 &&
                                 <Navigation currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
                        }
                       
                    </div>
            </Layout>
    );
}