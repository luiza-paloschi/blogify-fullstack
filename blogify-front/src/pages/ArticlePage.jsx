import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import useSelectedArticle from "../hooks/api/useSelectedArticle";
import { useEffect, useState } from "react";
import ArticleBody from "../components/Article/ArticleBody";
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export default function ArticlePage(){
    const location = useLocation();
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const { selectedArticle } = useSelectedArticle();
    

    useEffect( ()=> {
        //location.state.articleId
        async function fetch(){
            const article = await selectedArticle(articleId);
            setArticle(article);
        }
        fetch();
    },[])

    return (
        <Layout>
            <div className="w-8/12 mt-8 mb-6 break-words px-5">
                {article &&
                <>
                    <h1 className="font-bold font-lora text-5xl mb-5">{article.title}</h1>
                    <span className="text-sm text-gray-500 italic my-6">{dayjs(article.createdAt).format('LLL')}</span>
                    <ArticleBody content={article.content}/>
                </>
                }
            </div>
        </Layout>
    );
}