import './App.css';
import Header from "./components/header";
import Home from './components/home';
import About from './components/about';
import Category from './components/category';
import Contact from './components/contact';
import Footer from './components/footer';
import Blogdetail from './components/blogdetail';
import Cart from './components/Cart';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Business from './components/business';
import Food from './components/food';
import Tech from './components/tech';
import Travel from './components/travel';
import Culture from './components/culture';
import Education from './components/education';
import Politics from './components/politics';


function App() {
  return <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/category" element={<Category/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/category/:id" element={<Blogdetail/>}  />
      <Route path="/cart" element={<Cart/>}  />
      <Route path="/business" element={<Business/>} />
      <Route path="/food" element={<Food/>} />
      <Route path="/technology" element={<Tech/>} />
      <Route path="/travel" element={<Travel/>} />
      <Route path="/politics" element={<Politics/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/culture" element={<Culture/>} />

      <Route path="/blog/:id" element={<Blogdetail/>} />

      </Routes>
    <Footer/>
  </Router>
  </>
}

export default App;
