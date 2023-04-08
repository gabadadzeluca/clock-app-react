import sun from '../../../assets/desktop/icon-sun.svg';
import moon from '../../../assets/desktop/icon-moon.svg';
import { useState } from 'react';

interface MessageData {
  message: string;
  icon: string;
}

export default function Clock(props:{
  time:string;
}){

  const selectMessage = ():MessageData =>{
    let message:string = '';
    let icon: string;
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      message = 'Good morning!';
      icon = sun;
    } else if (hour >= 12 && hour < 18) {
      message = 'Good afternoon!';
      icon = moon;
    } else {
      message = 'Good evening!';
      icon = moon;
    }
    return {message, icon};
  }

  const {message, icon} = selectMessage();
  
  return (
    <div>
      <p style={{ backgroundImage: `url(${icon})` }}>{message}</p>
      <h2>{props.time}</h2>
    </div>
  )
}