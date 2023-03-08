import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { registerAsync } from "../redux/slices/authSlice";

type FormData = {
  email: string;
  password: string;
};

const SignUp = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await registerAsync(data);
      // await dispatch(registerAsync(data));
      // dispatch(setToken(response.token));
      router.push("/");
    } catch (error) {
      // setError(error.response.data.message);
      console.error("Failed to register");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto mt-5">
      <div>
        <h1 className='header' style={{ paddingTop: '100px'}}>Register Now!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="     e-mail"
              // value={email}
              className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="     create password"
              className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="     confirm password"
              className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <div>
              <button
              style={{top:'70%'}}
              type="submit"
              className="text-white font-bold"
              >
                Register
              </button>
            </div>
          
            <Link href="/login" className="linkBtn" style={{top:'70%'}}> 
              Back to login
            </Link>
          </div>
        </form>
      </div>
      <div className='rightBg' >
        <img src="images/twc.png" width="200px" />
        <h1>contacts</h1>
        <h2>portal</h2>
      </div>
    </div>
  );
};

export default SignUp;
