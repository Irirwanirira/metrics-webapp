import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="details">
      <div className="main">
        <h1>{state.country}</h1>
        <p>{state.updated}</p>
      </div>

      <div className="self_display">
        <h1>Live information</h1>
        <p>
          {' '}
          Continent
          {' '}
          <span>
            {state.continent}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Cases
          {' '}
          <span>
            {state.cases}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Todays Case
          {' '}
          <span>
            {state.todayCases}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Death
          {' '}
          <span>
            {state.deaths}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Todays Death
          {' '}
          <span>
            {state.todayDeaths}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Recovered
          {' '}
          <span>
            {state.recovered}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Todays Recovered
          {' '}
          <span>
            {state.todayRecovered}
            {' '}
          </span>
        </p>
        <p>
          {' '}
          Tests
          {' '}
          <span>
            {state.tests}
            {' '}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
