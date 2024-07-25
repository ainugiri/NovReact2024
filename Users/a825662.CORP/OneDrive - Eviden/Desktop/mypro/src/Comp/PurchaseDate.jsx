import React from 'react';
const PurchaseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="purchase-date">
            <div className="purchase-month">{month}</div>
            <div className="purchase-day">{day}</div>
            <div className="purchase-year">{year}</div>
        </div>
    );
}
export default PurchaseDate;