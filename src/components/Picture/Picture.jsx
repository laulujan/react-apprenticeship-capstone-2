import React from 'react';
import { Image, Figure, ImgWrapper, Caption } from './Picture.styles';

const Picture = ({ picture }) => {
  return (
    <Figure>
      <ImgWrapper>
        <Image src={picture.url} alt={picture.title} />
      </ImgWrapper>
      <Caption>{picture.title}</Caption>
    </Figure>
  );
};

export default Picture;
