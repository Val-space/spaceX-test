import { useState } from 'react';
import "swiper/css";
import './launch-card.css';
import { Modal } from '../Modal/Modal';

export const LaunchCard = ({ launch }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card" onClick={() => handleOpen()}>
        <div className="card--front" style={{
          backgroundImage: `url(${launch.links.flickr_images[0]})`,
        }}>
          <p>{`Mission name: ${launch.mission_name}`}</p>
        </div>
        <div className="card--back">
          {launch.details ? launch.details : 'No details about the launch'}
        </div>
      </div>
      <Modal launch={launch} open={open} handleClose={handleClose} />
    </>
  );
};
