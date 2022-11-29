import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const {state } =  location;

  return (
    <div>
      <h1>{state.country}</h1>
      <p> Continent: {state.continent}</p>
      <p> Cases: {state.cases}</p>
      <p> Today's Case: {state.todayCases}</p>
      <p> Death: {state.deaths}</p>
      <p> Today's Death: {state.todayDeaths}</p>
      <p> Recovered: {state.recovered}</p>
      <p> Today's Recovered: {state.todayRecovered}</p>
      <p> Tests:  {state.tests}</p>
    </div>
  );
};

export default Details;
