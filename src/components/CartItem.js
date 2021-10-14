import React from 'react';

const CartItem = (props) => {

    const data = {...props.data};
    let cartitems = {...props.cart};

    let increaseItem = () => {
        cartitems.size++;
        cartitems.items[data.data.id].quantity += 1;
        let price = parseFloat(data.data.price);
        cartitems.total += price;

        props.setCart(cartitems);
    }

    let decreaseItem = () => {
        cartitems.size--;
        cartitems.items[data.data.id].quantity > 1 ? cartitems.items[data.data.id].quantity -= 1 : delete cartitems.items[data.data.id];
        let price = parseFloat(data.data.price);
        cartitems.total -= price;

        props.setCart(cartitems);
    }

    let removeItem = () => {
        cartitems.size = cartitems.size - data.quantity;
        let price = parseFloat(data.data.price * data.quantity);
        cartitems.total = cartitems.total - price;
        delete cartitems.items[data.data.id];

        props.setCart(cartitems);
    }

    return (
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-50" src={data.data.image} />
                </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{data.title}</h5>
                        </div>
                    <div>
                    <div className="d-flex flex-row align-items-cetner qty">
                        <i className="bi bi-plus-circle" onClick={increaseItem}></i>
                        <p className="mb-0"><span><strong class="quantity">{data.quantity}</strong></span></p>
                        <i className="bi bi-dash-circle" onClick={decreaseItem}></i>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <button className="card-link-secondary small text-uppercase mr-3" onClick={removeItem}><i className="bi bi-trash mr-1"></i> Remove item </button>
                    <button className="card-link-secondary small text-uppercase"><i className="bi bi-suit-heart mr-1"></i> Move to wish list </button>
                </div>
                <p class="mb-0"><span><strong id="summary">${(data.data.price * data.quantity).toFixed(2)}</strong></span></p>
            </div>
        </div>
        </div>
        </div>
    );
}

export default CartItem;