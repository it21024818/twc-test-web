import React, { useEffect } from 'react';
import { Contact } from '../redux/types';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllContacts, updateContact, deleteContact } from '../redux/slices/contactsSlice';

interface Props {
  contacts: Contact[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContactsTable: React.FC<Props> = ({ contacts, onEdit, onDelete }) => {

  const dispatch = useDispatch();
  // const contact = useSelector((state: RootState) => state.contacts.items);

  useEffect(() => {
    // dispatch(getAllContacts());
  }, []);

  const handleEdit = (id: string) => {
    console.log(`Edit contact with id ${id}`);
  };

  const handleDelete = (id: string) => {
    // dispatch(deleteContact(id));
  };

  const style = {

  };

  return (
    <div style={style}>
      <h1>Contacts</h1>
      <table className="w-full border border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 p-2">Full Name</th>
            <th className="border border-gray-500 p-2">Number</th>
            <th className="border border-gray-500 p-2">Email Address</th>
            <th className="border border-gray-500 p-2">Gender</th>
            <th className="border border-gray-500 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="border border-gray-500 p-2">{contact.fullName}</td>
              <td className="border border-gray-500 p-2">{contact.number}</td>
              <td className="border border-gray-500 p-2">{contact.emailAddress}</td>
              <td className="border border-gray-500 p-2">{contact.gender}</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
