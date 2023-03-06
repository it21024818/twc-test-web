import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchContacts, deleteContact } from '../redux/actions/contactsActions';

const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Number</th>
            <th>Email Address</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.fullname}</td>
              <td>{contact.number}</td>
              <td>{contact.emailAddress}</td>
              <td>{contact.gender}</td>
              <td>
                <button onClick={() => handleEdit(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedContact && (
        <div>
          <h2>Edit Contact</h2>
          <form>
            <label>Fullname:</label>
            <input type="text" value={selectedContact.fullname} />
            <br />
            <label>Number:</label>
            <input type="text" value={selectedContact.number} />
            <br />
            <label>Email Address:</label>
            <input type="text" value={selectedContact.emailAddress} />
            <br />
            <label>Gender:</label>
            <input type="text" value={selectedContact.gender} />
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contacts;
