import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../ApiConfig";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(API_URL+"contact/");
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