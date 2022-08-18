import React, { Component } from "react";
import ItemShoes from "./ItemShoes";

export default class ListShoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.props.data.map((item, i) => {
            return (
              <div key={i} className="col-4">
                <ItemShoes
                  handleView={this.props.handleShoe}
                  handleAdd={this.props.handleAdd}
                  detail={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
