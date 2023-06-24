import { useState } from 'react';
import { toast } from 'react-toastify';
import { signupFields } from "../../constants/formFields"
import Input from "../Input";
import FormAction from '../FormAction';
import useSignUp from '../../hooks/api/useSignUp';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const fields = signupFields;
  const navigate = useNavigate();
  const [signupState,setSignupState]=useState({username:'', email:'', password:'', confirmPassword:''});
  const { loadingSignUp, signUp } = useSignUp();

  const handleChange=(e)=>setSignupState({...signupState,[e.target.name]:e.target.value});

  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      await signUp(signupState);
      toast('Successfully registered, please login!');
      navigate('/sign-in');
    } catch (error) {
      const data = error.response.data;
      toast.error(data.message);
      data.details && data.details.map((detail) => toast.error(detail));
    }
    
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.name]}
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
          <FormAction isDisabled={loadingSignUp} handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form>
    )
}