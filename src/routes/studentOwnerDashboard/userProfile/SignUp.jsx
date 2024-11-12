// import React, { useState } from 'react';
// import Sign from './Sign.css'

// function SignUp () {

//    const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//    });

//    const handleChange = (e) => {
//       const {name, value} = e.target;

//       setFormData({
//         ...formData,
//         [name]: value
//       });
//    }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.createPassword !== formData.confirmPassword){
//       alert('Input correct credentials please!!!');
//       return;
//     }
//    console.log("Form Data submitted: ", formData);
//    alert('Account created successfully');
//   }; 

//   return (
//     <div className="container">
//       <div className="overlay"></div>
//         <div className="form-Container">
//          <h1><b>Dormdaze</b></h1>
         

//         {/* Sign-Up form */} 
//         <form onSubmit={handleSubmit} className='sign-up form'>

//         <label htmlFor='name'>Name:</label>
//           <input
//             type='name'
//             id='name'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             required
//             />


//           <label htmlFor='email'>Email:</label>
//           <input
//             type='email'
//             id='email'
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//             required
//             />

//             <label htmlFor='createPassword'>Create Password:</label>
//             <input
//             type='password'
//             id='createPassword'
//             name='createPassword'
//             value={formData.createPassword}
//             onChange={handleChange}
//             required
//             />

//             <label htmlFor='confirmPassword'>Confirm Password:</label>
//             <input
//             type='password'
//             id='confirmPassword'
//             name='confirmPassword'
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             />

//           <button className='create an account'>Create account</button> 
           
//         </form>

//       <div className='login-link'>
//         <p>Already have an Account? <a href="#">Log In</a></p>
//         </div>
//         </div>
//         </div>  

//   );
// }

// export default SignUp