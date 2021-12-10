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
      {/* In V6,We use Routes to replace Switch in V5 */}
      <Routes>
        <Route path="/welcome" element={<Welcome />}>
          <Route
            path="/welcome/new-user"
            element={<p1>Welcome,new user!!</p1>}
          />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        {/* Here to define the route format */}
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
