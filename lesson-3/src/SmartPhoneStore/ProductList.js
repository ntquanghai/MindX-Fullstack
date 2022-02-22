import React from "react";
import ProductItem from "./ProductItem";
const ProductList = (props) => {
  const { products, title, onPhoneSelect, currentItems, addItems } = props;

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3 className="mt-4 mb-2 text-success">{title}</h3>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="p-0 btn btn-primary shadow-none cartButton border-0 bg-white text-right mt-4 mb-2 red text-danger"
        >
          {" "}
          Giỏ hàng ({currentItems.number})
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="w-100 table">
                <thead>
                  <tr>
                    <th scope="col" className = "">Mã sản phẩm</th>
                    <th scope="col" className = "">Hình ảnh</th>
                    <th scope="col" className = "">Tên sản phẩm</th>
                    <th scope="col" className = "">Số lượng</th>
                    <th scope="col" className = "">Đơn giá</th>
                    <th scope="col" className = "">Thành tiền</th>
                  </tr>
                </thead>
                <tbody id ="tableBody">
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {products &&
          products.map((product, index) => {
            return (
              <div className="col-4" key={index}>
                <ProductItem
                  product={product}
                  onPhoneSelect={onPhoneSelect}
                  addItems={addItems}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ProductList;

// Tại sao phải có unique key?
