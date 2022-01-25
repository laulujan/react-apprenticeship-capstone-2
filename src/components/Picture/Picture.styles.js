import styled from 'styled-components';

export const Figure = styled.figure`
  max-height: 750px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: inherit:
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const ImgWrapper = styled.div`
  max-height: 650px;
  overflow: hidden;
  &img {
    opacity: 1;
  }
  &:hover img {
    opacity: 0.9;
  }
`;
export const Caption = styled.figcaption`
  text-align: end;
`;
export const VideoPlayer = styled.iframe`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  &img {
    opacity: 1;
  }
  &:hover img {
    opacity: 0.9;
  }
`;
