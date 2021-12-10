import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Car</Link>
        </li>
        <li>
          <Link to="/products/p3">Game</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
