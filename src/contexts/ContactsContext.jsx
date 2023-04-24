import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get("http://localhost:3010/contact/");
        setContacts(res.data);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(true)
      }
    };

    fetchContacts();
  }, []);

  return (
    <ContactsContext.Provider value={{contacts, isLoading}}>
      {children}
    </ContactsContext.Provider>
  );
};