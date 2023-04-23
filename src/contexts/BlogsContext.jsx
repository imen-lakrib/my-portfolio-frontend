import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3010/blog/");
        setBlogs(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogsContext.Provider value={blogs}>
      {children}
    </BlogsContext.Provider>
  );
};