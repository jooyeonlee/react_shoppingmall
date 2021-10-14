import React from 'react'
import CartItem from '../components/CartItem'
import './Cart.css';

const Cart = (props) => {
    let ship = 2.00;

    return (
        <section>
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-3">
                        <div className="pt-4 wish-list">
                            <h5 className="mb-4">Cart (<span>{Object.keys(props.cart.items).length}</span> items)</h5>
                            
                            {Object.values(props.cart.items).map(item => {
                                return <CartItem data={item} key={item.id} cart={props.cart} setCart={props.setCart} />
                            })}

                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div class="mb-3 total">
                        <h5 class="mb-3">The total amount of</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Temporary amount
                                <span>${props.cart.total.toFixed(2)}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                                Shipping
                                <span>${ship.toFixed(2)}</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total Amount</strong>
                                    <strong>
                                        <p class="mb-0">(including VAT)</p>
                                    </strong>
                                </div>
                                <span><strong>${`${props.cart.total+ship}`}</strong></span>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;