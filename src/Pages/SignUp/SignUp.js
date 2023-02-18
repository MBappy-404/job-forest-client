import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvaider/Auth';

const SignUp = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const { createUser, updateUser } = useContext(AuthContext);
     const [signUpError, setSignupError] = useState('')
   
     const handleSignup = data => {

          createUser(data.email, data.password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                     
                    

                          
               })
               .catch(err => {
                    setSignupError(err.message);
                    console.log(err.message);
               })
     }

    


     return (
          <div className='flex justify-center my-10'>
               <div class="block p-6 rounded-lg  shadow-lg bg-white max-w-md">
                    <h1 className='text-2xl font-bold my-3 text-gray-700'>Create Account</h1>
  <form onSubmit={handleSubmit(handleSignup)}>
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="First name"
          {...register("name", {
               required: "Name  is required"
          })}
          />
           <span className='text-red-600 '> {errors.name && <p role="alert">{errors.name?.message}</p>}</span>
      </div>
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Last Name"
          {...register("name", {
               required: "Name  is required"
          })}
          />
          
      </div>
      
    </div>
   
    <div class="form-group mb-6">
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
        placeholder="Email address"
        {...register("email", {
          required: "Email Address is required"
     })}
        />
         <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>
    </div>
   

    <div class="form-group mb-6">
      <input type="password" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
          minLength: { value: 6, message: "Password must be 6 characters or longer" }
     })}
        />
        <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
    </div>
    
    {signUpError && <p className=' text-center text-red-600'>{signUpError}</p>}
     

    <div class="form-group form-check text-center mb-6">
      <input type="checkbox"
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
        id="exampleCheck25" checked/>
      <label class="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
    </div>
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      duration-150"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      >Sign up</button>
  </form>
</div>
          </div>
     );
};

export default SignUp;