import useArticles from "../../hooks/api/useArticle";
import Subtitle from "../Subtitle";
import ArticleCard from "./ArticleCard";

export default function Content(){
    const { articles, articlesLoading } = useArticles();


    return (
        <div className=" max-w-7xl w-full h-screen mx-auto break-words">
            <div className="w-full px-5 md:flex h-full">
                <div className="primary md:w-[70%] p-8">
                    <Subtitle title={'Latest Releases'} />
                    {!articlesLoading &&
                        articles?.map((article) => <ArticleCard key={`article${article.id}`} article={article}/>)
                    }
                </div>
            </div>
        </div>
    );
}