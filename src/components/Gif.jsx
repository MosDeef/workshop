import React from 'react';

const Gif = (props) => {
  const { gifId, setSelectedGifId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  const handleClick = () => {
    setSelectedGifId(gifId);
  };
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick}/>
  );
};

export default Gif;
