import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvaider/Auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SignIn = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const provider = new GoogleAuthProvider();
     const { signIn, googleProvider,loading,setLoading } = useContext(AuthContext);
     const [loginError, setLoginError] = useState();
     const navigate = useNavigate();
     const MySwal = withReactContent(Swal);


     const handleLogin = data => {
      

      signIn(data.email, data.password)
           .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(false)
                navigate('/home')
                MySwal.fire({
                  title: 'Login Success',
                  icon: 'success',
                  timer: 1500,
                  showConfirmButton: false,
             });

           })
           .catch(err => {
                setLoginError(err.message);
                console.log(err.message);
           })
 }


 const googleSignIn = () => {

  googleProvider(provider)
       .then(result => {
            const user = result.user;
            console.log(user);
            MySwal.fire({
              title: 'Login Success',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
         });
            navigate('/home')
             
       })
       .catch(err => {
            console.log(err.message);
            setLoginError(err.message)
       })
}




 
     return (
          <div>
               <section class="my-10">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="w-full"
          alt="Img"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form  onSubmit={handleSubmit(handleLogin)}>
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <p class="text-lg mb-0 mr-4">Sign in with</p>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              {/* <!-- Facebook --> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
                
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </button>

            <button
             onClick={googleSignIn}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              {/* <!-- Twitter --> */}
              <FaGoogle className='w-4 h-4'></FaGoogle>
            </button>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              {/* <!-- Linkedin --> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
                
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </button>
          </div>

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>

          {/* <!-- Email input --> */}
          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email address"
              {...register("email", {
                required: "Email Address is required"
           })}
            />
          </div>
          <span className='text-red-600 '> {errors.email && <p role="alert">{errors.email?.message}</p>}</span>

          {/* <!-- Password input --> */}
          <div class="mb-6">
            <input
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded   m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be more strong' },
                minLength: { value: 6, message: "Password must be 6 characters or longer" }
           })}
            />
          </div>
          <span className='text-red-600 '> {errors.password && <p role="alert">{errors.password?.message}</p>}</span>
          {loginError && <p className='text-red-600 text-center'>{loginError}</p>}

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a href="#!" class="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Login
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                ><Link to='/signUp'>Register</Link></a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
          </div>
     );
};

export default SignIn;