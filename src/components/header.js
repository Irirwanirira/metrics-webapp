import {
  faCircleArrowRight,
  faGear,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Heading = () => {
  const { back } = useSelector((state) => state.datas);

  return (
    <nav className="nav_bar">

<Link to="/">
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-right" />
      </Link>
      {back ? (
        <NavLink to="/" className="back_to_home">
          Back
        </NavLink>
      ) : (
        ""
      )}
      <h2>COVID-19 Updates</h2>
      <div>
        <FontAwesomeIcon icon={faMicrophone} className="icon_microphone" />
        <FontAwesomeIcon icon={faGear} className="icon_gear" />
      </div>
    </nav>
  );
};

export default Heading;
