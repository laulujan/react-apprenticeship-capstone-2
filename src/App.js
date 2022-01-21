import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import DatePicker from './components/DatePicker/DatePicker';
import Picture from './components/Picture/Picture';
import Explanation from './components/Explanation/Explanation';
import { getPicture } from './api/getPicture';
import './App.css';

function App() {
  const [picture, setPicture] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getPicture().then((data) => setPicture(data));
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Title />
        <DatePicker />
        {picture ? (
          <>
            <Picture picture={picture} />
            <Explanation picture={picture.explanation} isOpen={isOpen} />
            <span onClick={handleClick}>
              {isOpen ? 'Show Less' : 'Read More..'}
            </span>
          </>
        ) : (
          <div>loading</div>
        )}
      </main>
    </div>
  );
}

export default App;
