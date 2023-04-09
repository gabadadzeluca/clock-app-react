import {useState} from 'react';
import './App.css';
import Quote from './components/quoteGenerator/Quote';
import Time from './components/timeContainer/time/Time';
import bgImgs from './utils/bgImgs';

function App() {
  const[isDataVisible, setIsDataVisible] = useState<boolean>(false);
  const[bgImage, setBgImage] = useState<string>('');

  const getBgImg = ()=>{
    const isNight = new Date().getHours() >= 19 || new Date().getHours() < 7;
    

  }

  return (
    <div className="App">
      <div className={'Container'}>
        <Quote isDataVisible={isDataVisible}/>
        <Time isDataVisible={isDataVisible} setIsDataVisible={setIsDataVisible}/>
      </div>
    </div>
  );
}

export default App;
