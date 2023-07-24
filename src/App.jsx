import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Hotel from './pages/Hotel/Hotel';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotel/:id' element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
