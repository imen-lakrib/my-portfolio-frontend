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
function App() {

  function Auth({ children, ...rest }) {
    if (localStorage.getItem("token")) {
      return children
    }
    else return <Navigate to='secretpannel/login' replace='true' />
  }


  return (
    <BrowserRouter>
      <Container className="App" position="relative">
        <ThemeProvider theme={appTheme}>
          <SocialMedia />

          <NavBar />
          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
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
      </Container>
    </BrowserRouter>
  )
}

export default App