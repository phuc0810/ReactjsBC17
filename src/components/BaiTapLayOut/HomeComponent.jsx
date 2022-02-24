import React, { Component } from "react";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavComponent from "./NavComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 m-0 p-0">
              <HeaderComponent />
            </div>
          </div>
          <div className="row">
            <div className="col-4 m-0 p-0">
              <NavComponent />
            </div>
            <div className="col-8 m-0 p-0">
              <ContentComponent />
            </div>
            <div className="row">
              <div className="col-12 m-0">
                <FooterComponent/>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
