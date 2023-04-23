import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const EducationsContext = createContext();

export const EducationsProvider = ({ children }) => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await axios.get("http://localhost:3010/education/");
        setEducations(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <EducationsContext.Provider value={educations}>
      {children}
    </EducationsContext.Provider>
  );
};