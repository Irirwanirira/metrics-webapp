import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountries } from "../redux/home/information";
import { v4 as uuidv4 } from "uuid";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const { countries, status } = useSelector((state) => state.datas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="display_flex">
      {countries.map((item) => (
        <NavLink state={item} to="/details">
          <div key={uuidv4()} className="country_display">
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-right" />
            <p>{item.country}</p>
            <p>{item.updated}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Home;
