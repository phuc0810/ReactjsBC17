import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    //nội dung component luôn luôn bao phủ bởi 1 thẻ
    return (
      <div>
        <div className="text-center p-3 bg-warning text-dark">yellow</div>
      </div>
    );
  }
}
