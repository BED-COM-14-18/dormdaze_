
import { useState } from "react";
import {FcGoogle} from "react-icons/fc";
import { Fakey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export default function Sign_in(){
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [errors, setErrors] = useState({});


  const validate = () => {
    const errors = {};
    if(!email) errors.email = "Email is required";
if(!password) errors.password = "Password is required";

  };
const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
    }
    else{
      //here the succeddiful sign_in is handled
      console.sign({ email, password});

      //reset the form
      setEmail(" ");
      setPassword (" ");
      setErrors({ });
    }
};


}