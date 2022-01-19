import React from 'react';
import { LaunchCard } from '../LaunchCard/LaunchCard';
import './launches.css';

export const Launches = React.memo(({ launchesByYear }) => {
  return (
    <div className="launches-table">
      {launchesByYear.map((launch) => (
        <LaunchCard
          key={launch.mission_id + launch.mission_name}
          launch={launch}
        />
      ))}
    </div>
  );
});
