import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:3010/contact/");
        setContacts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={contacts}>
      {children}
    </ContactsContext.Provider>
  );
};