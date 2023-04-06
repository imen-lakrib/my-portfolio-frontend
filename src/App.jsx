import {  Container, ThemeProvider } from "@mui/material";
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import {appTheme} from './theme/theme.js'
import './app.css'
import NavBar from "./components/navBar/NavBar.jsx";
import SocialMedia from "./components/socialMedia/SocialMedia.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Works from "./pages/work/Works.jsx";
import About from "./pages/about/About.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Contact from "./pages/contact/Contact.jsx";
function App() {
 

  return (
    <BrowserRouter>
    <Container className="App" position="relative">
    <ThemeProvider theme={appTheme}>
      <SocialMedia/>
        
      <NavBar/>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>

        

        
      </Routes>

      <Footer/>



    </ThemeProvider>
    </Container>
    </BrowserRouter>
  )
}

export default App
