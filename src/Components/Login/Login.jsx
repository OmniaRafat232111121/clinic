import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = ({saveUserData}) => {
    const navigate=useNavigate();
    const initialValues={
        email:'',
        password:''
    }
    //validationsschema
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
      });
    const handleSubmit=async(values)=>{
        try{
          const response= await axios.post(`https://reqres.in/api/login`,values);
          const token = response.data.token;
          console.log(token)
          localStorage.setItem('token',token);
            saveUserData();
          toast.success('Login successful')
          navigate('/')
          
          console.log('Login successful', response.data);

        }
        catch(error){
            console.error('Login failed', error);


        }
    }
    
const formik=useFormik({
    initialValues,
    validationSchema,
    onSubmit:handleSubmit
})
  return (
    <div className="flex justify-center items-center h-screen p-5">
    <form
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[70%] bg-gray-300"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>

  )
}

export default Login;
