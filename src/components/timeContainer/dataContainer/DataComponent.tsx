export default function DataComponent(props:{
  title: string;
  param: number|string;
}){
  const {title, param} = props;
  return (
    <div>
      <p>{title}</p>
      <h2>{param}</h2>
    </div>
  );
}