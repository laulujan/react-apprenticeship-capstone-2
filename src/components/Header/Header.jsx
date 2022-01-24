import React from 'react';
import { MyHeader, Image } from './Header.styles';

const Header = () => {
  return (
    <MyHeader>
      <figure>
        <Image src="/nasa.png" alt="Nasa Logo" />
      </figure>
    </MyHeader>
  );
};

export default Header;
