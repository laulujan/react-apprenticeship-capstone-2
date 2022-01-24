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
