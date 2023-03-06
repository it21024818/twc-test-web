import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { IUser } from '../interfaces/IUser';
import { RootState } from '../redux/store';
import Link from "next/link";

const SignUp = () => {
  // let navigate = useNavigate();
  // const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  // const { userInfo, loading, error, success } = useSelector((state: RootState) => state.userLogin);


  // const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     dispatch(login({ email, password }));
  // }

    // useEffect(() => {
    //     if(success || userInfo) {
    //         navigate("/");
    //     }
    // }, [userInfo, success, dispatch]);


  return (
    <div className="container mx-auto mt-5">
      <div>
        <h1 className='header'>Register Now!</h1>
        <form >
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="create password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="confirm password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <div>
              <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          
            <Link href="/login" className="linkBtn"> 
              Back to login
            </Link>
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

export default SignUp;
