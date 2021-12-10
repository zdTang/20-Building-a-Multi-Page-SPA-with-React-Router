import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import About from "./pages/About";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <h2>App Component</h2>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        {/* Here to define the route format */}
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
