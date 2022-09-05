

function Cart(props) {
    const {quantity = 0} = props;
    return (
        <div className="cart white-text blue darken-1" onClick={props.handleBasketShow}>
            <i className="material-icons korzinka ">add_shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export default Cart;