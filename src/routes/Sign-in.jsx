import React, { useState } from 'react';
import SignUp from './SignUp.css'

function SignIn (){
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    

});
const handleChange = (e) => {
  const {name, value} = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.createPassword !== formData.confirmPassword){
    alert('Input correct credentials please!!!');
    return;
  
  }
  console.log("Form Data submitted: ", formData);
  alert('Account created successfully');

};
return (
  <div className="container">
    <div className="overlay"></div>
      <div className="form-Container">
       <h1><b><i>Sign in to start your session</i></b></h1>

       {/* Sign-Up form */} 
       <form onSubmit={handleSubmit} className='signIn form'>

<label htmlFor='name'>Email:</label>
  <input
    type='email'
    id='email'
    name='email'
    value={formData.email}
    onChange={handleChange}
    required
    />
     <label htmlFor='email'>password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            />

            


          <button className='Submit'><i>Sign in</i></button> 
           
        </form>

      
        </div>
        </div>  

  );
}

export default SignIn



