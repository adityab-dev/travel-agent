import React, { useEffect, useRef, useState } from 'react';
import { FeedLabel, H3 } from '../typography/Typography';
import './Feed.scss';
import Seeker from './Seeker/Seeker';

function Feed(props) {
  const { playback, index, src, label, play, onVideoFinish, ...extraProps } =
    props;

  const [playVideo, setPlayVideo] = useState(false);
  const [durationMs, setDurationMs] = useState(0);
  const srcVideoRef = useRef(null);

  useEffect(() => {
    if (srcVideoRef) setDurationMs(srcVideoRef.current.duration * 1000);

    if (index > 0) {
      if (playback[index - 1] === true && playback[index] === false) {
        setPlayVideo(true);
      } else {
        setPlayVideo(false);
      }
    } else if (index === 0 && !playback.includes(true)) {
      setPlayVideo(true);
    } else {
      setPlayVideo(false);
    }

    if (durationMs > 0 && playVideo) {
      setTimeout(() => {
        if (playVideo) onVideoFinish();
      }, durationMs);
    }
  }, [durationMs]);

  return (
    <section className='feed-container'>
      <FeedLabel>{label}</FeedLabel>
      {playVideo ? <Seeker index={index} /> : null}
      <video
        ref={srcVideoRef}
        src={src}
        className='feed'
        {...extraProps}
        // autoPlay not working until 2 attributes are present
        autoPlay={playVideo}
        muted={true}
      ></video>
    </section>
  );
}

export default React.memo(Feed);
