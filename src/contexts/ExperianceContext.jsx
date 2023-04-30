import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../ApiConfig";

export const ExperiancesContext = createContext();

export const ExperiancesProvider = ({ children }) => {
  const [experiances, setExperiances] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchExperiances = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(API_URL+"experiance/");
        setExperiances(res.data);
        setIsLoading(false)

      } catch (error) {
        console.error(error);
        setIsLoading(false)

      }
    };

    fetchExperiances();
  }, []);

  return (
    <ExperiancesContext.Provider value={{experiances, isLoading}}>
      {children}
    </ExperiancesContext.Provider>
  );
};