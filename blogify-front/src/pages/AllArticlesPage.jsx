import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import ArticleCardAll from "../components/All/ArticleCardAll";
import useAllArticles from "../hooks/api/useAllArticles";
import Navigation from "../components/All/Navigation";


export default function AllArticlesPage(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get('page')) || 1
  );
  const { useAll } = useAllArticles();
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await useAll(currentPage)
        setArticles(response.articles);
        setTotalPages(response.totalPages);

      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate({ search: `?page=${pageNumber}` });
  };

    return (
            <Layout>
                    <div className="max-w-4xl w-full mx-auto px-4 mt-8 mb-10">
                        <h1 className="text-4xl font-serif font-bold mb-2">All Articles</h1>
                        <div className="border-b-2 border-solid border-gray-300 pb-2 mb-8"></div>
                        {articles?.map((article) => (
                            <ArticleCardAll key={article.id} article={article} />
                        ))}
                        {totalPages > 1 &&
                                 <Navigation currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
                        }
                       
                    </div>
            </Layout>
    );
}