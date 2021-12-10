import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import About from "./pages/About";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
