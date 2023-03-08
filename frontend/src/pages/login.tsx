import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import { loginAsync } from "../redux/slices/authSlice";


import Link from "next/link";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // dispatch(loginAsync({ email, password }));
      router.push("/");
    } catch (error) {
      // setErrorMessage(error.message);
      console.error("Failed to login");
    }
  };


  return (
    <div className="container mx-auto mt-5">
      <div>
        <h1 className='header' style={{ paddingTop: '100px'}}>Hi there,</h1>
        <h2 className='header2'>Welcome to our <br></br> contacts portal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="     e-mail"
              className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="     password"
              className="border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                Login
              </button>
            </div>
          
            <div>
                <Link href="/register" className="linkBtn" style={{top:'70%'}}> 
                  Click here to register
                </Link>
            </div>
          </div>
        </form>
      </div>
      <div className='rightBg'>
        <img src="images/twc.png" width="200px"/>
        <h1>contacts</h1>
        <h2>portal</h2>
      </div>
    </div>
  );
};

export default Login;
