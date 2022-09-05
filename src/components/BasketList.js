import BasketItem from "./BasketItem";

function BasketList(props) {
    const {order} = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum+elem.price.finalPrice * elem.quantity
        },0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {
               order.length ? order.map(item => 
                    {return(
                        <BasketItem key={item.mainId} {...item} removeFromBasket={props.removeFromBasket} />
                    )}
                ):
                <li className="collection-item">Basket is empty</li>
            }  

            <li className="collection-item active">Total Price: {totalPrice} <b>$</b></li>
            <li className="material-icons basket-close" onClick={props.handleBasketShow}>close</li>
        </ul>
    );
}

export default BasketList;