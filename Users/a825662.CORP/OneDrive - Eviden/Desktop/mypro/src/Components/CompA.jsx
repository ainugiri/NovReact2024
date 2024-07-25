import './CompA.css';
function CompA(props) {
  return (
    <div>
        <input type = "checkbox" /> 
        <h6>{props.sub}</h6> 
        <p>{props.desc}</p>
    </div>
  )
}

export default CompA;