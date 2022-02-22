import React from "react";

const ProductItem = (props) => {
  const { product, onPhoneSelect, addItems } = props;
  const { name, img, id } = product;

  const onPhoneSelectHandler = (phoneId) => {
    onPhoneSelect(phoneId);
  };

  const addItemsHandler = (phoneId) => {
    addItems(phoneId);
  }

  return (
    <div className="card p-3" style={{ width: "20rem" }}>
      <img src={img} className="card-img-top" alt="product img" />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text fw-bold">{name}</p>
        <div className = "d-flex">
          <button
            href="#"
            className="btn btn-primary"
            onClick={() => onPhoneSelectHandler(id)}
          >
            Xem chi tiết
          </button>
          <button type="button" className="btn btn-primary" onClick = {() => addItemsHandler(id)}>
            Thêm giỏ hàng 
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
