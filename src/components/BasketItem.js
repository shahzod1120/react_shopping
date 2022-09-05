function BasketItem(props) {
    const {mainId, displayName, price,quantity} = props
    
    return (
     <li className="collection-item basket-item">
        {displayName} x{quantity} = {price.finalPrice * quantity}<b>$</b>
        <span className="secondary-content">
            <i className="material-icons basket-delete" onClick={() => props.removeFromBasket(mainId)}>delete_forever</i>
        </span>
     </li>
    );
}

export default BasketItem;