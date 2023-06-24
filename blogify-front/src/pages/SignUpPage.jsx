import Container from "../components/Container";
import AuthHeader from "../components/Auth/AuthHeader";
import Signup from "../components/Auth/SignUp";

export default function SignUpPage(){
    return(
        <Container>
            <AuthHeader
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/sign-in"
            />
            <Signup />
        </Container>
    )
}