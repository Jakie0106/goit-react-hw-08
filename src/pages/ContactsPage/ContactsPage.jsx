import ContactForm from "../../components/ContactForm/ContactForm";

import ContactList from "../../components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className="items-center">
      <div className="w-full flex justify-center gap-10 px-5 py-6 items-center">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}

      {filteredContacts.length > 0 ? (
        <ContactList />
      ) : (
        <h3>No contacts available</h3>
      )}
    </div>
  );
};

export default ContactsPage;
