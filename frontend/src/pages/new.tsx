import ContactPortal from '@/components/ContactPortal';
import LogoutBtn from '@/components/LogoutBtn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from "../redux/slices/contactsSlice";
import { useRouter } from "next/router";

const NewContact = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      id: "",
      fullName: "",
      number: "",
      emailAddress: "",
      gender: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await dispatch(addContacts(formData));
        router.push("/contacts/");
      } catch(error) {
        console.error("Failed to add new contact: ");
      }
  

    };



  return (
    <div>
        <ContactPortal />
        <h1 style={{fontSize: '50px', paddingLeft:'200px', paddingTop:'20px', fontWeight:'bold'}}>New Contact</h1>
      <form onSubmit={handleSubmit}>
      <div style={{width: '40%', float:'left', marginLeft:'100px'}}>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="     full name"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="number"
            value={formData.number}
            onChange={handleInputChange}
            className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="     phone number"
          />
        </div>
      </div>

      <div style={{width: '50%', float:'right'}}>
        <div className="mb-4">
          <input
            type="text"
            id="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            className="border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="     e-mail"
          />
        </div>
        
        <div style={{width: '10%', float:'left', marginTop:'40px', marginLeft:'50px'}}>
          <label htmlFor="gender" className="block font-bold mb-2">
            gender
          </label>
        </div>

        <div className="flex items-center mb-4" style={{width: '10%', float:'left'}}>
          <input id="default-radio-1" type="radio" style={{width: '1%'}} value={formData.gender} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="default-radio-1" style={{marginLeft:'30px'}} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">male</label>
        </div>

        <div className="flex items-center" style={{width: '55%', float:'right', marginTop:'40px'}}>
          <input id="default-radio-2" type="radio" style={{width: '1%'}} value={formData.gender} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="default-radio-2" style={{marginLeft:'30px'}} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">female</label>
        </div>

      </div>

        <div className="flex justify-center" style={{marginTop: '210px'}}>
          <button
            type="submit"
            style={{marginLeft:'100px'}}
            className="text-white font-bold"
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
