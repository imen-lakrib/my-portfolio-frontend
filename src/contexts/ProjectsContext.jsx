import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading]= useState(false)


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get("http://localhost:3010/project/");
        setProjects(res.data);
        setIsLoading(false)

      } catch (error) {
        console.error(error);
        setIsLoading(false)

      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{projects, isLoading}}>
      {children}
    </ProjectsContext.Provider>
  );
};