import React, { Component } from 'react';
import axios from 'axios';


export default class Women extends Component {
  constructor(props) {
    super(props);


    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    let res = await axios.get('/api/getWomens')
    console.log(res.data)
    this.setState({products: res.data})
    console.log(this.state.products)
  }

  addToCart(item_id) {
    axios.post('/api/addToCart', {
      item_id
    })
  }
  render() {
    return (
      <div className="product-container">
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
                <button id="add" onClick={ () => this.addToCart(item_id)}>Add To Cart</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
