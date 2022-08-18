import React, { Component } from "react";
export default class extends Component {
  render() {
    let { image, name, price } = this.props.detail;
    return (
      <div className="card my-2">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body text-left">
          <h5>{name}</h5>
          <p className="text-warning">{price}$</p>
        </div>
        <div className="card-footer text-left">
          <button
            type="button"
            onClick={() => {
              this.props.handleAdd(this.props.detail);
            }}
            className="btn btn-danger"
          >
            Add
          </button>
          <a
            onClick={() => {
              this.props.handleView(this.props.detail);
            }}
            href="#info"
            role="button"
            className="btn btn-warning mx-2"
          >
            Detail
          </a>
        </div>
      </div>
    );
  }
}
