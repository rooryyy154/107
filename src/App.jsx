import {BrowserRouter, Routes, Route} from 'react-router';

import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Admin from "./pages/Admin";
import Cart from "./pages/Cart"
import PageNotFound from './pages/PageNotFound';

import HelloMessage from "./components/HelloMessage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import GlobalProvider from './state/globalProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import QuantityPicker from "./components/QuantityPicker";

function App() {
  return(
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

      <main className="container py-4">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </main>

        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;