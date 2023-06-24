import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { loginFields } from "../../constants/formFields";
import Input from "../Input";
import FormAction from '../FormAction';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import useSignIn from '../../hooks/api/useSignIn';

export default function Login(){
    const fields=loginFields;
    const [loginState,setLoginState]=useState({email: '', password: ''});
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const { signIn } = useSignIn();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.name]:e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const userData = await signIn(loginState.email, loginState.password);
            setUserData(userData);
            toast('Successfully logged in');
            navigate('/');
          } catch (err) {
            toast.error(err.response.data.message);
          }
    }

    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.name]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>
        <FormAction handleSubmit={handleSubmit} text="Login"/>
      </form>
    )
}