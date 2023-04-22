import { Container, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { appTheme } from './theme/theme.js'
import './app.css'
import NavBar from "./components/navBar/NavBar.jsx";
import SocialMedia from "./components/socialMedia/SocialMedia.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Works from "./pages/work/Works.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import BlogAdmin from "./dashboard/BlogAdmin.jsx";
import Login from "./dashboard/Login.jsx";
import ExperianceAdmin from "./dashboard/ExperianceAdmin.jsx";
import EducationAdmin from "./dashboard/EducationAdmin.jsx";
import SkillAdmin from "./dashboard/SkillAdmin.jsx";
import ContactAdmin from "./dashboard/ContactAdmin .jsx";
import ProjectAdmin from "./dashboard/ProjectAdmin.jsx";
//

import axios from "axios";
import { useEffect, useState } from "react";
import { SkillsProvider } from "./contexts/SkillsContext.jsx";
function App() {

  function Auth({ children, ...rest }) {
    if (localStorage.getItem("token")) {
      return children
    }
    else return <Navigate to='secretpannel/login' replace='true' />
  }


  // fetching data:
  const baseUrl= "http://localhost:3010"
  
  useEffect(() => {
    getExperiances()
    getEducations()
    getContacts()
}, [])
// get all experiments
const getExperiances = () => {
    axios.get(`${baseUrl}/experiance/`)
        .then(res => {
          setExperiances(res.data)
           
        })
        .catch((err) => {
          console.log(err)
        });
}

const getEducations = () => {
  axios.get(`${baseUrl}/education/`)
      .then(res => {
        setEducations(res.data)
         
      })
      .catch((err) => {
        console.log(err)
      });
}

const getContacts = () => {
  axios.get(`${baseUrl}/contact/`)
      .then(res => {
        setContacts(res.data)
         
      })
      .catch((err) => {
        console.log(err)
      });
}


const [experiances, setExperiances] = useState([])
const [educations, setEducations] = useState([])

const [contacts, setContacts] = useState([])


  return (
    <BrowserRouter>
      <Container className="App" position="relative">
      <SkillsProvider>
        <ThemeProvider theme={appTheme}>
          <SocialMedia />

          <NavBar />
          {/* routes */}
          <Routes>
            <Route path="/" element={<Home  contacts={contacts} />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About experiances={experiances} educations={educations} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/secretpannel/login" element={<Login />} />


            {/* only admin */}
            <Route path="/dashboard" element={<Auth><Dashboard /></Auth>} >
              <Route path="BlogAdmin" element={<BlogAdmin />} />
              <Route path="ExperianceAdmin" element={<ExperianceAdmin />} />
              <Route path="EducationAdmin" element={<EducationAdmin />} />
              <Route path="SkillAdmin" element={<SkillAdmin />} />
              <Route path="ContactAdmin" element={<ContactAdmin />} />
              <Route path="projectAdmin" element={<ProjectAdmin />} />
              
            </Route>




          </Routes>

          <Footer />



        </ThemeProvider>
        </SkillsProvider>
      </Container>
    </BrowserRouter>
  )
}

export default App
