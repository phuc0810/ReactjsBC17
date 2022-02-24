import React, { Component } from "react";

export default class Databinding extends Component {
    product = {
        id:1,
        name:'iphone',
        price:1000,
        img:'https://picsum.photos/id/1/200/300'
    }

    renderProduct = () =>{
        //nội dung trả về của hàm muốn binding phải được chứa trong 1 thẻ bao phủ hoặc là 1 string hoặc number
        return(
        <div className="card w-25">
            <img src = {this.product.img} alt = "..."/>
            <div className="card-body">
                <p>{this.product.name}</p>
                <p>{this.product.price}</p>
            </div>
        </div>
        )
    }
    render() {
        let title = "hello";
        //biến được khai áo = var let const
    return (
      <div className="container">
        <p id="txt">{title}</p>
        <hr/>
        {this.renderProduct()}
      </div>
    );
  }
}
