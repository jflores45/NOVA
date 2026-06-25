import WomenPage from './pages/WomenPage';
import MainPage from './pages/MainPage';
import CartPage from "./pages/CartPage";
import LikePage from "./pages/LikePage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likes" element={<LikePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;