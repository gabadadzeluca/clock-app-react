import DataComponent from "./DataComponent"
export default function NumberData(props:{
  timeZone:string; 
  weekNum: number;
  dayOfWeek: number;
  dayOfYear: number;
  isDataVisible: boolean;
}){
  
  const {timeZone, weekNum, dayOfWeek, dayOfYear, isDataVisible} = props;
  return (
    <>
    {isDataVisible ? 
      (
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
      :
      null
    }
    </>

  )
}