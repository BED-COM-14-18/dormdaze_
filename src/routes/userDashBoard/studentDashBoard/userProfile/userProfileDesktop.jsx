
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
return(
  <div className="flex justify-center items-center bg-cyan-950 h-full">
    <div className="bg-cyan-900 rounded-md px-1 py-8 mt-20 mb-6 w-3/5 justify-center items-center">
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
      <div className="mb-5">
        <h1 className="font-bold text-3x1 sm:text-4x1 text-black">sign-in</h1>

      </div>
        <div className="space-x-4 mt-8">
          <CgProfile className="inline-block"/>
          <label className="text-black font-sembold" htmlFor="email">
            Email
          </label>
          <input
          className="py-1 px-1 w-60 rounded-md outline-none bg-slate-200"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="limchip@gmail.com"
          />
        </div>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <div className = "space-x4- mt-8">
          <Fakey className = "inline-block"/>
          <label className = "text-black font-sembold" htmlFor = "password">
            Password
          </label>
          
          
      
          </div>
          <div>
            <button
            className="flex flex-row items-center bg-cyan-600 rounded-md mt-10 py-2 px-10 hover:scale-90 duration-200 ease-in-out"
            type ="submit"
            >
              <p className="font-sembold text-lime-300">SignIn</p>
            </button>
          </div>

    </form>
    </div>
  </div>

);


}