import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket} = props;
    return (
        <div className="goods container">
            {goods.map(items => (
                <GoodsItem key={items.mainId} {...items} addToBasket={addToBasket}/>
            ))}
        </div>
    );
}

export default GoodsList;