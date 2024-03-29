import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../ApiConfig";

export const EducationsContext = createContext();

export const EducationsProvider = ({ children }) => {
  const [educations, setEducations] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchEducations = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(API_URL+"education/");
        setEducations(res.data);
        setIsLoading(false)

      } catch (error) {
        console.error(error);
        setIsLoading(false)

      }
    };

    fetchEducations();
  }, []);

  return (
    <EducationsContext.Provider value={{educations, isLoading}}>
      {children}
    </EducationsContext.Provider>
  );
};