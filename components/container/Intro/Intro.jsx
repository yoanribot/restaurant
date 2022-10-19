import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className={"app__video-overlay flex__center"} style={playVideo? {background: "rgba(0,0,0,0.10)"} : {background:"rgba(0,0,0,0.65)"}}>
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {/*!!!!!!!  display components onMouseOver !!!!!!!!!!!!*/}
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
