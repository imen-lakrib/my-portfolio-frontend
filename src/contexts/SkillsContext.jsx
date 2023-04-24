import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get("https://my-portfolio-backend-final.vercel.app//skill/");
        setSkills(res.data);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
    };

    fetchSkills();
  }, []);

  return (
    <SkillsContext.Provider value={{skills, isLoading}}>
      {children}
    </SkillsContext.Provider>
  );
};