import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

export default function ArticleCardAll({article}){
    const navigate = useNavigate();

    function selectArticle(article){
         navigate(`/article/${article.id}`, {state: {articleId: article.id}});
     }
   
        return (
            <div className="border w-full border-solid border-black p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className='max-w-[50%] font-open-sans'>
                <h2 onClick={()=> selectArticle(article)} className="text-lg sm:text-xl md:text-2xl font-open-sans font-semibold truncate pb-1  hover:text-beige-600 cursor-pointer">{article.title}</h2>
                <p> Author: <span className='font-semibold'>{article.User.username}</span></p>
              </div>
              <p className="text-sm font-sans text-gray-600">{dayjs(article.createdAt).format('DD/MM/YYYY')}</p>
            </div>
          </div>
         
        );

}