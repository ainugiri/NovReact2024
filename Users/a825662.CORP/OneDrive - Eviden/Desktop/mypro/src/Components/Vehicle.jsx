function Car(props) {
  return (
    <div>
        <p> {props.person} bought a {props.name} car </p>
    </div>
  )
}

function Bike() {  
    return (
        <div>
            <h2>Bike</h2>
            <p>Harley Davidson</p>
        </div>
    )
}


function Bus() {
    return (
        <div>
            <h2>Bus</h2>
            <p>Volvo</p>
        </div>
    )
}   

export {Car, Bike, Bus};