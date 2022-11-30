import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCountries } from '../redux/home/information';

const Home = () => {
  const { countries, status } = useSelector((state) => state.datas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <h1 className="live_preview">Live preview</h1>
      <div className="display_flex">
        {countries.map((item) => (
          <div key={uuidv4()} className="country_display">
            <NavLink state={item} to="/details">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </NavLink>
            <div className="update_countries">
              <h3>{item.country}</h3>
              <p>{item.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
