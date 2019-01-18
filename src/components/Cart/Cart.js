import React, { Component } from 'react';
import axios from 'axios';
import './Cart.css';
export default class Cart extends Component {
  constructor(props) {
    super(props);



    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    let res = await axios.post('/api/cart')
    console.log(res.data)
    this.setState({products: res.data})
    console.log(this.state.products)
  }

  removeItem(item_id) {
    axios.delete(`/api/removeItem/${item_id}`).then((res) => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }

  checkout(cart_id) {
    axios.delete(`/api/checkout/${cart_id}`).then((res) => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }


  render() {
    return (
      <div className="product-container">
      <button id="checkout" onClick={ () => this.checkout()}>Checkout</button> 
        <div className="product-item-component">
          {this.state.products.map((product, i) => {
            console.log(product)
            let { item_id } = product
            return (
              <div className="product-component" key={i}>
                <img id="product-img" src={product.item_img} alt="img" />
                <div id="text">
                <p id="product-name">{product.item_name}</p>
                <p id="product-price">{product.price}</p>
                <button id="remove" onClick={ () => this.removeItem(item_id)}>Remove</button>  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
