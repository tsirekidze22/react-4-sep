import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <Link to="/" className="m-1 bg-gray-200 rounded-xl p-1">
        Home
      </Link>
      <Link to="/about" className="m-1 bg-gray-200 rounded-xl p-1">
        About
      </Link>
      {/* <a href="/about">About</a> */}
      {/* <a href="/about">About</a> */}
    </nav>
  );
};

export default Header;
