import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CommunitiesWeManage from './Components/CommunitiesWeManage';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <CommunitiesWeManage />
      <Carousel />
    </div>
  );
}

export default App;
