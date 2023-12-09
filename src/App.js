import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import Offers from "./pages/offers/Offers";
import Single from "./pages/single/Single";
import Liked from "./layout/liked/Liked";
import CartStore from "./layout/cart-store/CartStore";
import Categories from "./components/categories/Categories";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<CartStore />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/collections/offers" element={<Offers />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
