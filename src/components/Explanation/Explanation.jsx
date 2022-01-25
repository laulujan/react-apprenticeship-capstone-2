import React from 'react';
import { Section, TextBox, Span } from './Explanation.styles';

const Explanation = ({ description, isOpen, onClick }) => {
  return (
    <Section>
      {isOpen ? (
        <TextBox>
          {description}{' '}
          <Span onClick={onClick}>{isOpen ? 'Show Less' : 'Read More..'}</Span>
        </TextBox>
      ) : (
        <TextBox>
          {description.slice(0, 100)}...{' '}
          <Span onClick={onClick}>{isOpen ? 'Show Less' : 'Read More..'}</Span>
        </TextBox>
      )}
    </Section>
  );
};

export default Explanation;
