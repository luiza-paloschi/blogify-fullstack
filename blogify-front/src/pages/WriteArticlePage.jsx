import styled from 'styled-components';
import Layout from "../components/Layout";
import WriteForm from '../components/Write/WriteForm';

export default function WriteArticlePage(){

    return (
        <Layout>
            <div className='max-w-5xl w-full px-4 flex flex-col items-center'>
                <Heading>
                    <Title>Write an article</Title>
                </Heading>
                <WriteForm />
            </div>
        </Layout>
    );
}

const Heading = styled.div`
    margin-top: 40px;
    padding: 0px 15px;
    display: flex;
    h1 {
        margin: 0px;
        padding: 0px;
        font-family: "Lora", sans-serif;
        color: #080808;
        -webkit-transition: all 0.4s ease 0s;
        -o-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
        em {
            font-style: normal;
            font-weight: 600;
        }
    }
`;

const Title = styled.h1`
        text-align: center;
        word-break: break-word;
        font-size:2.5rem; font-weight:300; color:#222; letter-spacing:1px;
        text-transform: uppercase;
        display: flex;
        column-gap: 27px;
        align-items: center;
        &::after, &::before {
            content: " ";
            width:100px;
            display: block;
            border-bottom: 1px solid #c50000;
            border-top: 1px solid #c50000;
            height: 5px;
            background-color:#f8f8f8;
            @media (max-width: 500px) {
                width: 0px;
            }
        }
        @media (max-width: 500px) {
            font-size: 2rem
        }
`