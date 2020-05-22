import React, { Component } from 'react';
import './Products.css';

//import 'whatwg-fetch';

class Product extends Component {
    onVote=()=>
    {
        this.props.Click(this.props.id);
    }
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.image}></img>
                </div>
                <div className="right">
                    <a>
                        <i className='large caret up icon' />
                    </a>
                <div className="name">
                   <h1>{this.props.group}</h1>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
                <div className="auhtor">
                    <p>{this.props.name}</p>
                </div>
                    <div className="popularity">
                        {this.props.popularity}
                    </div>
                    <button onClick={this.onVote}> + </button>
                </div>
            </div>
        );
    }
}

export default Product;
