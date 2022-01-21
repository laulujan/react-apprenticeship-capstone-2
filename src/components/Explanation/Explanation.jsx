import React from 'react';

const Explanation = ({ picture, isOpen }) => {
  return (
    <section>
      {isOpen ? <p>{picture}</p> : <p>{picture.slice(0, 100)}...</p>}
    </section>
  );
};

export default Explanation;
