import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { IUser } from '../interfaces/IUser';
import { RootState} from 're'

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<IUser['email']>("");
    const [password, setPassword] = useState<IUser['password']>("");

    const { userInfo, loading, error, success } = useSelector((state: RootState ) => state.userLogin);
    // const { userInfo, loading, error, success } = useSelector((state: { userLogin: IUser }) => state.userLogin);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    }

    // useEffect(() => {
    //     if(success || userInfo) {
    //         navigate("/");
    //     }
    // }, [userInfo, success, dispatch]);

  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
