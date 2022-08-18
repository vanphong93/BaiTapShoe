import React, { Component } from "react";
import { shoeArr } from "./data";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import ListShoes from "./ListShoes";
export default class Ex_shop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    gioHang: [],
  };
  cloneGioHang = [...this.state.gioHang];
  // handleShop = () => {
  //   if (this.state.gioHang.length == 0) {
  //     alert("123");
  //     return;
  //   }
  // }
  handleIncrease = (object) => {
    let i = this.state.gioHang.findIndex((item) => {
      return item.id === object.id;
    });
    this.cloneGioHang[i].soLuong++;
    this.setState({ gioHang: this.cloneGioHang });
  };
  handleBuy = () => {
    alert("Thank you very much");
    this.cloneGioHang.splice(0);
    this.setState({
      gioHang: this.cloneGioHang,
    });
  };
  handleDecrease = (object) => {
    let i = this.state.gioHang.findIndex((item) => {
      return item.id === object.id;
    });
    if (this.cloneGioHang[i].soLuong > 1) {
      this.cloneGioHang[i].soLuong--;
    }
    this.setState({ gioHang: this.cloneGioHang });
  };
  handleRemove = (object) => {
    let i = this.state.gioHang.findIndex((item) => {
      return item.id === object.id;
    });
    this.cloneGioHang.splice(i, 1);
    this.setState({ gioHang: this.cloneGioHang });
  };
  handleShoe = (object) => {
    this.setState({ detailShoe: object });
  };
  handleAdd = (object) => {
    let i = this.state.gioHang.findIndex((item) => {
      return item.id === object.id;
    });
    if (i === -1) {
      let spGioHang = { ...object, soLuong: 1 };

      this.cloneGioHang.push(spGioHang);
    } else {
      this.cloneGioHang[i].soLuong++;
    }
    this.setState(
      {
        gioHang: this.cloneGioHang,
      }
      // () => { console.log('this.state', this.state) }
    );
  };
  render() {
    return (
      <div>
        <GioHang
          gioHang={this.state.gioHang}
          handleRemove={this.handleRemove}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleBuy={this.handleBuy}
          handleShop={this.handleShop}
        />
        <ListShoes
          data={this.state.shoeArr}
          handleAdd={this.handleAdd}
          handleShoe={this.handleShoe}
        />
        <DetailShoe detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}
