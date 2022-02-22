import React from "react";

const ProductDetail = (props) => {
  if(Object.keys(props.selectedPhone).length != 0) {
    return <div className = "d-flex flex-row p-3 ">
  
  <div className="card border-0" style={{ width: "18rem" }}>
    <h3 className = "card-title text-center">{props.selectedPhone.name}</h3>
    <img src={props.selectedPhone.img} className="card-img-top" alt="product img" />
    <div className = "">
    </div>
  </div>

  <div className = "column flex-grow-1 px-3">
    <h3 className ="pb-2 border-bottom"> Thông số kỹ thuật </h3>
    <div className = "pb-2 border-bottom">Màn hình: {props.selectedPhone.info.screen}</div>
    <div className = "pb-2 border-bottom">Hệ điều hành: {props.selectedPhone.info.os}</div>
    <div className = "pb-2 border-bottom">Camera trước: {props.selectedPhone.info.frontCamera}</div>
    <div className = "pb-2 border-bottom">Canera sau: {props.selectedPhone.info.backCamera}</div>
    <div className = "pb-2 border-bottom">RAM: {props.selectedPhone.ram}</div>
    <div className = "pb-2 border-bottom">ROM: {props.selectedPhone.rom}</div>
    <div className = "pb-2 border-bottom">Giá: {props.selectedPhone.price}</div>
  </div>

  </div>
  }
  else {
    return <></>
  }


  
};

export default ProductDetail;
