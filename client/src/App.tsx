import WomenPage from './pages/WomenPage';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/* <WomenPage /> */}

      <Routes>
        <Route path="/women" element={<WomenPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;