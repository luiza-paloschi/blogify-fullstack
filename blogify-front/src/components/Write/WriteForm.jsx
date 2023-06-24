import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './form.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useSaveArticle from '../../hooks/api/useSaveArticle';
import useCategories from '../../hooks/api/useCategories';

export default function WriteForm(){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('Write your text here...');
    const [chosenCategory, setChosenCategory] = useState(0);
    const { categories } = useCategories();
    const { saveArticle, saveArticleLoading } = useSaveArticle();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const body = {title: title, content: value, categoryId: chosenCategory};
        try {
            await saveArticle(body);
            toast('Article saved!');
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    }

    return (
        <>
        <div className="col-3">
            <input className="effect-1" type="text" value={title} name='title' onChange={(e)=> setTitle(e.target.value)}
            placeholder="What is the title of your article?" />
              <span className="focus-border"></span>
        </div>

        <div className='max-w-[800px] w-full mb-6'>
            <select required
            className={`effect-1 w-full font-open-sans tracking-[1px] text-[15px] leading-[24px]`}
            value={chosenCategory}
            onChange={(e) => setChosenCategory(parseInt(e.target.value))}
            >
            <option value="" hidden>Choose a category that fits your article</option>
            {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                {category.name}
                </option>
            ))}
            </select>
            <span className="focus-border"></span>
      </div>
        
            
      <ReactQuill style={{maxWidth: '800px', width:'100%', minHeight: '300px', marginBottom: '20px'}} theme="snow" value={value} onChange={setValue} />
      <SubmitButton disabled={saveArticleLoading} onClick={handleSubmit}>{saveArticleLoading ? 'Submiting...' : 'Submit'}</SubmitButton>
      </>
    );
}

const SubmitButton = styled.button`
    max-width:500px;
    margin: 65px 0px;
    width: 100%;
    padding: 5px 10px;
    font-family: 'Lora', sans-serif;
    font-size: 2rem;
    color: #e85a4f;
    background-color: #fff;
    border: 1px solid #e85a4f;
    text-transform: uppercase;
    @media (max-width: 500px){
        font-size: 1.5rem
    }
`