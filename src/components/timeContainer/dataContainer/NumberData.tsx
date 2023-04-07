import DataComponent from "./DataComponent"
export default function NumberData(props:{
  timeZone:string; 
  weekNum: number;
  dayOfWeek: number;
  dayOfYear: number;
}){
  const {timeZone, weekNum, dayOfWeek, dayOfYear} = props;
  return (
    <div>
      <div>
        <DataComponent title="CURRENT TIMEZONE" param={timeZone}/>
        <DataComponent title="DAY OF THE YEAR" param={dayOfYear}/>
      </div>
      <div>
        <DataComponent title="DAY OF THE WEEK" param={dayOfWeek}/>
        <DataComponent title="WEEK NUMBER" param={weekNum}/>
      </div>
    </div>
  )
}