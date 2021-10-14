import React from 'react'
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = (props) => {

    console.log(props)

    return (
        <section className="feature-products">
            <div className="container">
                <div className="col-md-12 text-center feature-title">
                    <h2>FEATURED PRODUCTS</h2>
                </div>
                <div className="d-flex justify-content-center row">
                    <div className="col-md-10">
                    {!props.products
                        ?
                        <h1>Loading product information...</h1>
                        :
                        Object.values(props.products).map((product, i) => {
                        return <ProductCard data={product} key={product.id} cart={props.cart} setCart={props.setCart}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;