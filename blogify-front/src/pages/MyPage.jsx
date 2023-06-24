import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserContext from "../contexts/UserContext";
import useUserArticles from "../hooks/api/useUserArticles";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import useDeleteArticle from "../hooks/api/useDeleteArticle";

export default function MyPage(){
    const [articles, setArticles] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const { userData } = useContext(UserContext);
    const { getUserArticles } = useUserArticles();
    const { deleteArticle } = useDeleteArticle();
    const navigate = useNavigate();

    async function fetchArticles(userId){
      try {
        const userArticles = await getUserArticles(userId);
        setArticles(userArticles);
      } catch (error) {
        console.log(error);
      }
    }

    async function deleteUserArticle (articleId){
      try {
        await deleteArticle(articleId);
        setRefresh(!refresh);
        toast("Article deleted with sucess!")
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete the article!")
      }
    }

    function selectArticle(articleTitle, articleId){
      const articlePath = articleTitle.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-')
      navigate(`/article/${articlePath}`, {state: {articleId: articleId}});
    }

    useEffect(() => {
        fetchArticles(userData.user.id);
    },[refresh])

    return (
        <Layout>
        <div className="max-w-4xl w-full mx-auto px-4">
          <h1 className="text-4xl font-lora font-semibold mt-8 mb-4 uppercase pb-2 border-solid border-b-2 border-black">Your articles</h1>
          <ul className="space-y-4">
            {articles?.map((article) => (
              <li
                key={article.id}
                className="bg-white shadow p-4 flex justify-between items-center"
              >
                <div>
                    <h2 onClick={()=>selectArticle(article.title, article.id)} className="text-2xl font-open-sans font-bold mb-2 cursor-pointer hover:text-beige-500">{article.title}</h2>
                    <p className="text-sm font-open-sans text-gray-600 mb-2">Published on: {dayjs(article.createdAt).format('DD/MM/YYYY')}</p>
                </div>
                <button onClick={()=> deleteUserArticle(article.id)} className="px-4 py-2 max-h-11 bg-beige-700 hover:bg-beige-500 transition-colors duration-500 ease-in-out text-white rounded-lg">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        </Layout>
      );
}