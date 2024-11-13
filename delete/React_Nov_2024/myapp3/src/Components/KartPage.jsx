import { Component } from "react";

class KartPage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.items}</li>
                </ul>
            </div>
        );
    }
}
KartPage.defaultProps = {
    items: 'No items in the kart'
}

export default KartPage;