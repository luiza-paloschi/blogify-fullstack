import styled from 'styled-components';

export default function ArticleBody({ content }){

    return (
        <Container  dangerouslySetInnerHTML={{ __html: content }}>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    font-family: 'Open Sans', sans-serif;
    h1{
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        
    }
    p{
        line-height: 1.8;
        font-size: 1.2em;
    }

`;