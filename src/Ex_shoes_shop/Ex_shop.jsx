import React, { Component } from "react";
// import { shoeArr } from "./data";
import DetailShoe from "./DetailShoe";
import GioHang from "./GioHang";
import axios from "axios";
import ListShoes from "./ListShoes";
const BASE_URL = "https://62db6ca4d1d97b9e0c4f338f.mockapi.io";
let initialization = [
    {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        description:
            "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
            "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 995,
        image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
];
export default class Ex_shop extends Component {
    state = {
        shoeArr: initialization,
        detailShoe: initialization[0],
        gioHang: [],
    };
    async getData() {
        try {
            let { data } = await axios({
                url: `${BASE_URL}/shoeShop`,
                method: "GET",
            });
            this.setState({
                shoeArr: data,
            });
        } catch (error) {
            console.log("error: ", error);
        }
    }

    cloneGioHang = [...this.state.gioHang];
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
        this.setState({
            gioHang: this.cloneGioHang,
        });
    };
    componentDidMount() {
        this.getData();
    }
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
