// list the products
// name qty description price

function DisplayProd(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>{props.name}</td>
   ``                 <td>{props.qty}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                </tr>
            </table>
        </div>
    );
}

export default DisplayProd;