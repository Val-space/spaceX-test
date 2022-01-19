import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Swiper, SwiperSlide } from "swiper/react";
import './modal.css';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  color: '#fff'
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  width: 400,
  bgcolor: '#000',
  border: '1px solid #000',
  borderRadius: '20px',
  p: 2,
  px: 4,
  pb: 3,
  top: '50%',
  left: '50%',
  transform: "translate(-50%, -50%)"
}

export const Modal = ({ launch, open, handleClose }) => {
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <Swiper className="mySwiper">
          {launch.links.flickr_images.map(image => <SwiperSlide><img src={image} /></SwiperSlide>)}
        </Swiper>
        <a
          href={launch.links.wikipedia}
          target="_blank"
          className="linkToWiki"
        >
          Open in wikipedia
      </a>
      </Box>
    </StyledModal>
  );
};
