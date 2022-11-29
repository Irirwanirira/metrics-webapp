import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountries } from "../redux/home/information";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const { countries, status }  = useSelector((state) => state.datas)
  console.log(countries)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
     {countries.map((item) => (
      <NavLink state={item} to='/details'>
        <div key={uuidv4()} >
        <h1>{item.country}</h1>
        <p>{item.deaths}</p>
        </div>
      </NavLink>
     
     ))}
    </div>
  )
};

export default Home;
