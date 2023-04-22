import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:3010/skill/");
        setSkills(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <SkillsContext.Provider value={skills}>
      {children}
    </SkillsContext.Provider>
  );
};