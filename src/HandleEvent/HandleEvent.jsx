// tạo ra 1 react class component sử dụng :rcc
import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = function () {
    alert("xin chào các bạn");
  };

  showMess = (name) => {
    alert("xin chào !" + name);
  };
  //   khai báo được phương thức với lại obj , array trên render
  render() {
    //   khai báo biến dưới render
    return (
      <div className="container">
        <h1>HandleEvent</h1>
        {/* cách 1 */}
        <button onClick={this.handleClick}>show message</button>

        {/* cách 2 */}
        <button
          onClick={() => {
            alert("xin chào mày");
          }}
        >
          Click Here
        </button>
        <hr />
        {/* sự kiện truyền tham số */}
        <button onClick={this.showMess.bind(this, "Cha m")}>Show mess</button>
        <button onClick={() => {
            this.showMess("cha m tên là");
        }}>show mess param</button>
      </div>
    );
  }
}
