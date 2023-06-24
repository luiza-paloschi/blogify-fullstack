import styled from 'styled-components';
import branding from '../../assets/branding.jpg'
import { useNavigate } from 'react-router-dom';

export default function Branding(){
    const navigate = useNavigate();
    return (
        <Section>
           <SiteBranding>
                <p>BLOGIFY</p>
            <div>
                <Line />
                <span>Share your ideas and experiences with the world</span>
                <Line />
            </div>
           </SiteBranding>
           <WriteButton onClick={()=> navigate('/write')}>Write an article</WriteButton>
        </Section>
    );
}

const Section = styled.section`
    width: 100%;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    img {
        max-width: 400px;
        width:100%;
    }
`;

const SiteBranding = styled.div`
    margin-bottom: 20px;
    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 3rem;
        font-weight: 400;
        text-align: center;
        line-height: 1.2em;
        word-wrap: break-word;
        margin-bottom: 20px;
        text-align: center;
    }
    span {
        font-size: 18px;
        font-family: 'lora, serif';
        font-weight: 400;
        margin-top: 10px;
    }
    div{
        display: flex;
        column-gap: 10px;
        align-items: center;
        padding:  0px 10px;
    }
`

const Line = styled.div`
    height: 1px;
    width: 60px;
    margin-top: 10px;
    background: #e85a4f;

`

const WriteButton = styled.button`
    margin-top: 15px;
    border: 1px solid #3a3a3a;
    display: inline-block;
    font-family: 'lora, serif';
    font-size: 1.4rem;
    padding: 10px 24px;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
`