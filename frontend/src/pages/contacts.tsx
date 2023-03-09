import React, { useEffect } from 'react';
import { Contact } from '../redux/types';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, updateContact, deleteContact } from './api/index';
import ContactPortal from '@/components/ContactPortal';
import LogoutBtn from '@/components/LogoutBtn';
import Link from 'next/link';
import RightBg from '@/components/RightBg';
import LeftBg from '@/components/LeftBg';

interface Props {
  contacts: Contact[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContactsTable: React.FC<Props> = ({ contacts, onEdit, onDelete }) => {

  // const dispatch = useDispatch();
  // const contact = useSelector((state: RootState) => state.contacts.items);

  // useEffect(() => {
  //   dispatch<any>(getAllContacts());
  // }, []);

  // const handleEdit = (id: string) => {
  //   console.log(`Edit contact with id ${id}`);
  // };

  // const handleDelete = (id: string) => {
  //   dispatch<any>(deleteContact(id));
  // };

  const style = {
    margin:'120px',
    marginLeft:'200px',
    width:'1100px',
    color: '#083F46',
    borderRadius: '50px'
  };

  return (
    <div>
      <RightBg />
      <ContactPortal />
      <div>
        <div style={{width: '50%', float:'left'}}>
          <h1 style={{fontSize: '50px', paddingLeft:'200px', paddingTop:'20px', fontWeight:'bold'}}>Contacts</h1>
        </div>
        <div style={{width: '50%', float:'right'}}>
          <Link href="/new"><button
            type="submit"
            style={{marginLeft:'1000px', marginTop:'30px', width:'200px'}}
            className="text-white font-bold"
          >
            add new contact
          </button></Link>
        </div>
      </div>
      <table className="rounded-2xl flex-row border border-collapse justify-center" style={style}>
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">full name</th>
            <th className="border border-gray-500 p-2">gender</th>
            <th className="border border-gray-500 p-2">email address</th>
            <th className="border border-gray-500 p-2">number</th>
          </tr>
        </thead>
        {/* <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="border border-gray-500 p-2">{contact.fullName}</td>
              <td className="border border-gray-500 p-2">{contact.gender}</td>
              <td className="border border-gray-500 p-2">{contact.emailAddress}</td>
              <td className="border border-gray-500 p-2">{contact.number}</td>
              <td className="border border-gray-500 p-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => onEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
      <LogoutBtn />
      <LeftBg />
    </div>
  );
};

export default ContactsTable;
