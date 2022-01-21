import React from 'react';

const Picture = ({ picture }) => {
  return (
    <figure>
      <img src={picture.url} alt={picture.title} />
      <figcaption>
        {picture.title}, {picture.copyright}
      </figcaption>
    </figure>
  );
};

export default Picture;
