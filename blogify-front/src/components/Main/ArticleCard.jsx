import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate } from 'react-router-dom';
dayjs.extend(relativeTime);



export default function ArticleCard({article}){
    const createdAt = dayjs(article.createdAt);
    const formattedDate = createdAt.fromNow();
    const navigate = useNavigate();

    function selectArticle(){
         navigate(`/article/${article.id}`, {state: {articleId: article.id}});
     }

    return (
        <div className="py-3 w-full border-solid border-b-[0.8px] border-[#dedede] leading-relaxed">
            <div className="article-header flex justify-between mb-1 items-center">
                <h2 onClick={selectArticle} className="font-semibold truncate text-md hover:text-beige-600 cursor-pointer">{article.title}</h2>
                <span className="italic text-[#85868c] pl-1 text-xs">{formattedDate}</span>
            </div>
            <p className="text-[#666] truncate text-sm">Author: {article.User.username}</p>
        </div>
    );
}