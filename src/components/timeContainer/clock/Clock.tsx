import sun from '../../../assets/desktop/icon-sun.svg';
import moon from '../../../assets/desktop/icon-moon.svg';
import styles from './Clock.module.css';

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
      message = 'Good morning';
      icon = sun;
    } else if (hour >= 12 && hour < 18) {
      message = 'Good afternoon';
      icon = moon;
    } else {
      message = 'Good evening';
      icon = moon;
    }
    return {message, icon};
  }

  const {message, icon} = selectMessage();
  const city = timeZone.split('/')[1]?.toUpperCase();
  return (
    <div className={styles.clockContainer}>
      <p style={{ backgroundImage: `url(${icon})` }} className={styles.message}>{message}</p>
      <div className={styles.timeDiv}>
        <h2>{time}</h2>
        <p>{timeFormat}</p>
      </div>
      <h3 className={styles.location}>IN {city}</h3>
    </div>
  );
}