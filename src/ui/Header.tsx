import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <p>Kentaro</p>
    </header>
  );
};

export default Header;
