import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get("https://my-portfolio-backend-final.vercel.app/blog/");
        setBlogs(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false)

      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider value={{blogs,isLoading}}>
      {children}
    </BlogsContext.Provider>
  );
};