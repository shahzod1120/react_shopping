import { toast } from 'react-toastify'
import {useState, useEffect} from 'react'
import {API_URL, API_KEY} from '../config'
import BasketList from './BasketList'
import Cart from './Cart'
import CloseBasket from './CloseBasket'
import GoodsList from './GoodsList'
import Loader from './Loader'


function Shop() {
    const [goods, setGoods] = useState([])
    const [order, setOrder] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isBasketShow, setBasketShow] = useState(false);

    console.log(order);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)

        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order,newItem])
        }
        else{
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return{
                        ...orderItem,
                        quantity:orderItem.quantity + 1,
                    }
                }
                else{
                    return orderItem;
                }
            });
            setOrder(newOrder)
        }
        toast.success('Goods add to basket successfuly !')
    }
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)

    }
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(item => item.mainId !== itemId )
        setOrder(newOrder)
        toast.error('remove item from basket successfuly')
    }
    useEffect(() => {
        fetch(API_URL, {
            headers:{
                Authorization:API_KEY,
            }
        }).then(response => response.json())
        .then(data => {data.shop && setGoods(data.shop); setLoading(false)})
    }, [])
    return (
        <div className="content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {!isLoading ? (<GoodsList goods={goods}  addToBasket={addToBasket}  /> ): <Loader/>} 
            {isBasketShow && <CloseBasket handleBasketShow={handleBasketShow}/>}
            {isBasketShow && <BasketList 
                order={order} 
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket} />
            }
        </div>
    );
}

export default Shop;