import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import DatePicker from './components/DatePicker/DatePicker';
import Picture from './components/Picture/Picture';
import Explanation from './components/Explanation/Explanation';
import NotFound from './components/NotFound/NotFound';
import { getPicture } from './api/getPicture';
import { Main, Left, Right } from './App.styles';

function App() {
  const [picture, setPicture] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const today = new Date(new Date().toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .split('T')[0];

  useEffect(() => {
    getPicture(today).then((data) => {
      updatePicture(data);
    });
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const updatePicture = (data) => {
    if ('code' in data) {
      setError(data.msg);
    } else if ('error' in data) {
      setError('There was an error, please try again.');
    } else {
      setError(false);
      setPicture(data);
    }
  };
  return (
    <div className="App">
      <Header />
      <Main>
        <Left>
          <Title />
          <DatePicker
            today={today}
            error={error}
            updatePicture={updatePicture}
          />
        </Left>
        <Right>
          {error ? (
            <NotFound error={error} />
          ) : picture ? (
            <>
              <Picture picture={picture} />
              <Explanation
                description={picture.explanation}
                isOpen={isOpen}
                onClick={handleClick}
                error={error}
              />{' '}
            </>
          ) : (
            <div>loading</div>
          )}
        </Right>
      </Main>
    </div>
  );
}

export default App;
