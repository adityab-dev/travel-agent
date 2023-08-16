import Feed from 'components/common/VideoFrame/Feed';
import './FutureGateways.scss';
import { H2 } from 'components/common/typography/Typography';
import { useCallback, useState } from 'react';

const videoSrcs = [
  { src: 'really.mp4', label: 'Switzerland' },
  { src: 'really.mp4', label: 'India' },
  { src: 'really.mp4', label: 'Dubai' },
  { src: 'really.mp4', label: 'London' },
];

function FutureGateways() {
  const [playback, setPlayback] = useState(videoSrcs.map(() => false));

  const videoSwitcher = useCallback(
    function (index) {
      setPlayback((prevState) => {
        prevState[index] = true;
        return [...prevState];
      });
    },
    [playback]
  );

  return (
    <section className='gate-container'>
      <H2>Inspiration For Future Getways</H2>

      <section className='feeds-container'>
        {videoSrcs.map(({ src, label }, index) => (
          <Feed
            playback={playback}
            key={Math.random()}
            index={index}
            onVideoFinish={videoSwitcher.bind(null, index)}
            play={playback[index]}
            src={src}
            label={label}
          />
        ))}

        {/* <Feed
          src='/really.mp4'
          autoPlay={true}
          label='Switzerland'
        />
        <Feed
          src='/really.mp4'
          autoPlay={true}
          label='India'
        />
        <Feed
          src='/really.mp4'
          autoPlay={true}
          label='Dubai'
        />
        <Feed
          src='/really.mp4'
          autoPlay={true}
          label='London'
        /> */}
      </section>
    </section>
  );
}

export default FutureGateways;
