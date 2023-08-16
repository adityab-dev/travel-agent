function Seeker({ index }) {
  let animationClass = 'feed-seeker ';

  switch (index) {
    case 0:
      animationClass += 'anim-dur-1';
      break;
    case 1:
      animationClass += 'anim-dur-2';
      break;
    case 2:
      animationClass += 'anim-dur-3';
      break;
    case 4:
      animationClass += 'anim-dur-4';
      break;
    default:
      null;
  }

  return (
    <>
      <div className={animationClass}></div>
      <div className='feed-seek'></div>
    </>
  );
}

export default Seeker;
