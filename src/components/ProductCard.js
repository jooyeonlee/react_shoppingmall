import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {

    const data = {...props.data};
    
    let addToCart = () => {
        let cartitems = {...props.cart}
        cartitems.size++;
        cartitems.items[data.id] ? cartitems.items[data.id].quantity += 1 : cartitems.items[data.id] = {data:data, quantity: 1}
        cartitems.total = cartitems.total + data.price;
        console.log(cartitems)

        props.setCart(cartitems);
    }

    return (
        <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-80" scr={data.image} />
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <div className="row">
                    <div className="col-lg-7 col-xl-7">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text"><small className="text-muted">{data.category}</small></p>
                        <div className="rating">
                            <i className="bi bi-star-fill text-primary fa-sm"></i>
                            <i className="bi bi-star-fill text-primary fa-sm"></i>
                            <i className="bi bi-star-fill text-primary fa-sm"></i>
                            <i className="bi bi-star-fill text-primary fa-sm"></i>
                            <i className="bi bi-star-fill text-primary fa-sm"></i>
                        </div>
                        <p className="card-text">{data.description}</p>
                    </div>
                    <div className="col-lg-5 col-xl-5">
                        <h6 className="mb-3"><span>${data.price}</span></h6>
                        <div className="my-4">
                            <button className="btn btn-primary btn-md mr-1 mb-2" type="button" onClick={addToCart}><i className="bi bi-cart-plus-fill pr-2"></i>Add to cart</button>
                            <button className="btn btn-light btn-md mr-1 mb-2" type="button"><i className="bi bi-info-circle-fill pr-2"></i>Details</button></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
}

export default ProductCard;