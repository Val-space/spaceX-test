import {
  React, useEffect, useState, useMemo,
} from 'react';
import { getData } from './api/api';
import { DateInput } from './DateInput/DateInput';
import { Launches } from './Launches/Launches';
import { Loader } from './Loader/Loader';

import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [launches, setLaunches] = useState([]);
  const [loader, setLoader] = useState(true);
  const [chosenYear, setChosenYear] = useState(date.getFullYear());

  useEffect(() => {
    async function fetchData() {
      try {
        const launchesFromApi = await getData().then((res) => res.json());

        setLaunches(launchesFromApi);
        setLoader(false);
      } catch (error) {
        setLoader(false);

        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setChosenYear(newDate.getFullYear());
  };

  const filterLaunchByDate = () => (
    launches.filter((launch) => launch.launch_year === date.getFullYear().toString()));

  const launchesByYear = useMemo(() => filterLaunchByDate(), [launches, chosenYear]);

  return (
    <div className="App">
      <div className="container">
        <div className="date-block-wrap">
          <DateInput handleDateChange={handleDateChange} date={date} />
          <div className="date-container">
            <p>{date.toDateString()}</p>
            <p>{date.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short' })}</p>
            <p>{date.toGMTString()}</p>
            <p>{date.toLocaleDateString('en-us', { year: 'numeric', month: 'short' })}</p>
            <p>{date.toLocaleDateString()}</p>
          </div>
        </div>
        <h2>
          {`spacex launches ${chosenYear}`}
        </h2>
        <p className="launchQnt">
          {`${launchesByYear.length} launches`}
        </p>
        {loader
          ? <Loader />
          : (
            <Launches
              launchesByYear={launchesByYear}
            />
          )}
      </div>
    </div>
  );
}

export default App;
