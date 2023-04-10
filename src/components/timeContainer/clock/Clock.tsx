import sun from '../../../assets/desktop/icon-sun.svg';
import moon from '../../../assets/desktop/icon-moon.svg';

interface MessageData {
  message: string;
  icon: string;
}

export default function Clock(props:{
  time:string;
  timeFormat: string;
  timeZone:string;
}){

  const {timeZone, timeFormat, time} = props; 
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
  const city = timeZone.split('/')[1]?.toUpperCase();
  return (
    <div>
      <p style={{ backgroundImage: `url(${icon})` }}>{message}</p>
      <div>
        <h2>{time}</h2>
        <span>{timeFormat}</span>
      </div>
      <p>IN {city}</p>
    </div>
  );
}