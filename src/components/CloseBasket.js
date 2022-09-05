function CloseBasket(props) {
    const { handleBasketShow} = props;
    return (
        <div className="closeBasketOverflow" onClick={handleBasketShow}>
        </div>
    );
}
export default CloseBasket;