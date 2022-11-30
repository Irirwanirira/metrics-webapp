import { Link, useLocation } from 'react-router-dom';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Cases
          {' '}
          <span>
            {state.cases}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Todays Case
          {' '}
          <span>
            {state.todayCases}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Death
          {' '}
          <span>
            {state.deaths}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Todays Death
          {' '}
          <span>
            {state.todayDeaths}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Recovered
          {' '}
          <span>
            {state.recovered}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Todays Recovered
          {' '}
          <span>
            {state.todayRecovered}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
        <p>
          {' '}
          Tests
          {' '}
          <span>
            {state.tests}
            {' '}
            <Link to="/">
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow-right"
              />
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
