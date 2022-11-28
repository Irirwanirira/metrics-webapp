import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h1> My counter </h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
      </div>
    </div>
  );
};

export default Nav;
