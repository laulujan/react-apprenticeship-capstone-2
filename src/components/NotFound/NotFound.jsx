import React from 'react';
import { Box } from './NotFound.styles';

const NotFound = ({ error }) => {
  return (
    <Box>
      <img
        src="https://c.tenor.com/4CHnbg_zVEoAAAAC/space-kitten.gif"
        alt="Not Found"
      />
      <p>{error}</p>
    </Box>
  );
};
export default NotFound;
