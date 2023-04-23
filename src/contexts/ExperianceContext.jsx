import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExperiancesContext = createContext();

export const ExperiancesProvider = ({ children }) => {
  const [experiances, setExperiances] = useState([]);

  useEffect(() => {
    const fetchExperiances = async () => {
      try {
        const res = await axios.get("http://localhost:3010/experiance/");
        setExperiances(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExperiances();
  }, []);

  return (
    <ExperiancesContext.Provider value={experiances}>
      {children}
    </ExperiancesContext.Provider>
  );
};