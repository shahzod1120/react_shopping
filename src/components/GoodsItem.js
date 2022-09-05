function GoodsItem(props) {
    const {mainId, displayName, displayDescription, displayAssets, price, addToBasket} = props;
    return (
        <div className="card" id={mainId}>
            <div className="card-image" >
                <img src={displayAssets[0].full_background} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                {displayDescription}
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({mainId, displayName,price})}>Buy</button>
                <span className="right" style={{fontSize:'1.8rem'}}>$ {price.finalPrice}</span>
            </div>
        </div>
    );
}

export default GoodsItem;