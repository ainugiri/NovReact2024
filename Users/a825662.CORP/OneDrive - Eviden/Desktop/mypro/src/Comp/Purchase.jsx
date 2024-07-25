import './Purchase.css';
import Card from './Card';
import PurchaseDate from './PurchaseDate';
function Purchase(props){
    return(
        <div>
            <Card className="purchase">
                <PurchaseDate date={props.date} />
                <div className="pur_item">{props.name}</div>
                <div className="pur_price">{props.price}</div>
            </Card>
        </div>
    );
}
export default Purchase;