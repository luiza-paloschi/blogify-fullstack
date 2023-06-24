import Container from "../components/Container";
import AuthHeader from "../components/Auth/AuthHeader"
import Login from "../components/Auth/Login";

export default function LoginPage(){
    
    return(
        <Container>
           <AuthHeader
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Sign Up"
                linkUrl="/sign-up"
            />
            <Login />
        </Container>
    )
}