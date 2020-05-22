import React, { Component } from 'react';
import './Product.css';
import Product from '../../components/Product/Product';
import Seed from '../../components/Seed/Seeed';

//import 'whatwg-fetch';

class ProduciList extends Component {
    constructor(props){
        super(props);
        this.state={
            product:[],
        };
        this.popularityUp=this.popularityUp.bind(this);

    }
    componentDidMount(){
        this.setState({product:Seed});
    }
    popularityUp=(productId)=>{
        const nextProduct=this.state.product.map((product)=>{
            if(product.id === productId) {
                return Object.assign({}, product, {
                    popularity: product.popularity + 1,
                });
            }
                 else{
                  return product;
                }

        });
        this.setState({
            product:nextProduct,
        });
        console.log(this.state.product);
    }

    render() {
        const sort=this.state.product.sort((a,b)=>(
            b.popularity-a.popularity
        ));
      const productss=sort.map((products)=>(
          <Product key={products.id}
              id={products.id}
              name={products.name}
              description={products.description}
              image={products.image}
              group={products.group}
              popularity={products.popularity}
              Click={this.popularityUp}

          />
      ));
        return (
            <div className="App">
                <h1 className="header">Hola niggas,This is my first React App</h1>
                {productss}
            </div>
        );
    }
}

export default ProduciList;
