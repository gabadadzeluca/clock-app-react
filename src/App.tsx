import {useEffect, useState} from 'react';
import './App.css';
import Quote from './components/quoteGenerator/Quote';
import Time from './components/timeContainer/time/Time';
import bgImgs from './utils/bgImgs';

function App() {
  const[isDataVisible, setIsDataVisible] = useState<boolean>(false);
  const[bgImage, setBgImage] = useState<string>('');

  const getBgImg = ()=>{
    const isNight = new Date().getHours() >= 19 || new Date().getHours() < 7;
    const imageSources = isNight ? bgImgs.night : bgImgs.day;
    const screenWidth = window.innerWidth;
    const newBgImage =
      screenWidth >= 768
        ? imageSources.desktop
        : screenWidth >= 576
        ? imageSources.tablet
        : imageSources.mobile;
    setBgImage(newBgImage);
  }

  useEffect(()=>{
    getBgImg();
  },[])
  

  return (
    <div className="App">
      <div className={'Container'} style={{ backgroundImage: `url(${bgImage})` }}>
        <Quote isDataVisible={isDataVisible}/>
        <Time isDataVisible={isDataVisible} setIsDataVisible={setIsDataVisible}/>
      </div>
    </div>
  );
}

export default App;
