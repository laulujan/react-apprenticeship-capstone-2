import React from 'react';
import {
  Image,
  Figure,
  ImgWrapper,
  Caption,
  VideoPlayer,
  VideoWrapper,
} from './Picture.styles';

const Picture = ({ picture }) => {
  return (
    <Figure>
      {picture.media_type === 'image' ? (
        <ImgWrapper>
          <Image src={picture.url} alt={picture.title} />
        </ImgWrapper>
      ) : (
        <VideoWrapper>
          <VideoPlayer src={picture.url} alt={picture.title} />
        </VideoWrapper>
      )}

      <Caption>{picture.title}</Caption>
    </Figure>
  );
};

export default Picture;
