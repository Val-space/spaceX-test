import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards"

import "./dragg.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectCards
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

export function DraggableList({ launchesByYear }) {
  return (
    <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
      {launchesByYear.map(launch =>
        <SwiperSlide>
          <div className="card swipe">
            <div className="card--front" style={{
              backgroundImage: `url(${launch.links.flickr_images[0]})`
            }}>
              <p>{`Mission name: ${launch.mission_name}`}</p>
              <p>{launch.links.flickr_images[0]}</p>
              <img className="launch-img" src={launch.links.flickr_images[0]}></img>
              <div style={{
                backgroundImage: `url(${launch.links.flickr_images[0]})`
              }}></div>
            </div>
            <div className="card--back">
              {launch.details ? launch.details : 'No details about the launch'}
            </div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  )
}
