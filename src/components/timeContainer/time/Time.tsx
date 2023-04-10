import axios from 'axios';
import { useEffect, useState } from 'react';
import NumberData from '../dataContainer/NumberData';
import styles from './Time.module.css';
import Clock from '../clock/Clock';

export default function Time(props:{
  isDataVisible : boolean;
  setIsDataVisible: (isDataVisible:boolean)=>void;
}){
  const{isDataVisible, setIsDataVisible} = props;
  const[timeZone, setTimeZone] = useState<string>('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const timeUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=xml&by=zone&zone=${timeZone}`;
  const[time, setTime] = useState<Date>(new Date());
  const[timeFormat, setTimeFormat] = useState<string>('');

  const getTimezone = ():void  => {
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(currentTimeZone);
  }
  const getTimeFormat = async () => {
    try{
      const response = await axios.get(timeUrl);
      const parser = new DOMParser();
      const xml = parser.parseFromString(response.data, 'application/xml');
      const dateFormat = xml.getElementsByTagName('abbreviation')[0].textContent;
      setTimeFormat(dateFormat ?? '');
    }catch(error){
      console.log("ERROR: ",error);  
    }
  }
  const getParams = () =>{
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const calculatedWeekNumber = Math.floor(diff / oneWeek);
    const calculatedDayOfWeek = now.getDay();
    const oneDay = 1000 * 60 * 60 * 24;
    const calculatedDayOfYear = Math.floor(diff / oneDay);
    return {weekNum: calculatedWeekNumber, dayOfWeek: calculatedDayOfWeek, dayOfYear: calculatedDayOfYear}
  }
  const handleClick = ():void =>{
    setIsDataVisible(!isDataVisible);
  }

  const {weekNum, dayOfWeek, dayOfYear} = getParams();
  const params = {
    timeZone, 
    weekNum, 
    dayOfWeek,
    dayOfYear,
    isDataVisible
  }
  
  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000*60);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    getTimezone();
    getParams();
    if (timeZone) {
      getTimeFormat();
    }
  }, [timeZone]);



  const formattedTime = time.toLocaleString([], {'hour12': false,'hour':'numeric', 'minute':'numeric'});
  
  return (
    <div>
      <div>
        <Clock time={formattedTime} timeFormat={timeFormat} timeZone={timeZone}/>
        <button 
          onClick={handleClick}
          className={`${styles.button} ${isDataVisible ? styles.clicked : ''}`}
          >
          MORE
          </button>
      </div>
      <NumberData {...params}/>
    </div>

  );
}