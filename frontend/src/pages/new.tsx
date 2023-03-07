import ContactPortal from '@/components/ContactPortal';
import LogoutBtn from '@/components/LogoutBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from "../redux/slices/contactsSlice";
import { createContact } from "./api/index";
import { Contact } from '../redux/types';

const NewContact = () => {

    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState("");
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(addContact({
          fullName, emailAddress, number, gender,
          id: ''
      }));

    };


  return (
    <div className="flex justify-center mt-10">
        <ContactPortal />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="full name"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="phone number"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e-mail"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Gender"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Contact
          </button>
        </div>
      </form>
      <LogoutBtn />
    </div>
  );
};

export default NewContact;
