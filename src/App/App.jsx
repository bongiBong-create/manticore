import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/catalog" />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
