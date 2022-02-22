import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

class SmartPhoneStore extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "images/samsung-note.jpg",
        info: {
          screen: "AMOLED Full HD 9.0",
          os: "Android 9.0",
          frontCamera: "20MP",
          backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
      },
      {
        id: 2,
        name: "IPhone12",
        price: "200306000",
        img: "images/iphone.jpg",
        info: {
          screen: "Full HD 12.0",
          os: "IOS 14",
          frontCamera: "20MP",
          backCamera: "Chính 100MB, phụ 30MP",
        },
        ram: "16 GB",
        rom: "32 GB",
      },
      {
        id: 3,
        name: "Xiaomi Note 10",
        price: "10005000",
        img: "images/xioami.jpg",
        info: {
          screen: "OLED 10.0",
          os: "Android 8.0",
          frontCamera: "69MP",
          backCamera: "Chính 96MB, phụ 30MP",
        },
        ram: "10 GB",
        rom: "64 GB",
      },
    ],
    selectedPhone: {},
    currentItems: {
      number: 0,
      price: 0,
      itemsList: [],
    },
  };

  duplicateCheck = (array, el) => {
    let duplicates = 0;
    for(let i = 0; i < array.length; i++) {
      if(el === array[i]) {
        duplicates++;
      }
    }
    return duplicates;
  }

  phoneSelect = (array,id) => {
    return array.find(resObj => resObj.id === id);
  }

  onPhoneSelect = (id) => {
    // 1. Tìm kiếm id này là sản phẩm nào trong list
    // 2. SetState cho selected phone
    const result = this.phoneSelect(this.state.products,id);
    this.setState({
      selectedPhone: result
    })
  };

  addNewRow = (table, data) => {
    let newRow = table.insertRow(0);
    newRow.insertCell(0).innerHTML = data.id;
    newRow.insertCell(1).innerHTML = 
      `<img style = "width:100px; height: 100px;" src = ${data.img}></img>`
    ;
    newRow.insertCell(2).innerHTML = data.name;
    newRow.insertCell(3).innerHTML = `<div id = ${"cellNumber"+data.id}>${this.duplicateCheck(this.state.currentItems.itemsList)}</id>`;
    newRow.insertCell(4).innerHTML = data.price;
    newRow.insertCell(5).innerHTML = `<div id = ${"cellPrice"+data.id}>${data.price}</id>`;
  }

  addItems = (id) => {
    const phoneInfo = this.phoneSelect(this.state.products,id);
    this.setState({
      currentItems:{
        number: this.state.currentItems.number + 1,
        price: parseInt(this.state.currentItems.price) + parseInt(phoneInfo.price),
        itemsList: [...this.state.currentItems.itemsList, phoneInfo.id]
      }
    }, () => {
      console.log(this.state.currentItems);
      if(this.duplicateCheck(this.state.currentItems.itemsList,id) > 1) {
        console.log(this.duplicateCheck(this.state.currentItems.itemsList,id))
        document.getElementById("cellNumber"+id).textContent = this.duplicateCheck(this.state.currentItems.itemsList,id);
        document.getElementById("cellPrice"+id).textContent = parseInt(phoneInfo.price)*this.duplicateCheck(this.state.currentItems.itemsList,id);
      }
      else {
        console.log("first")
        this.addNewRow(document.getElementById("tableBody"), phoneInfo);
        document.getElementById("cellNumber"+id).textContent = this.duplicateCheck(this.state.currentItems.itemsList,id);
        document.getElementById("cellPrice"+id).textContent = parseInt(phoneInfo.price)*this.duplicateCheck(this.state.currentItems.itemsList,id);
      }
    })
  }
  

  render() {
    const { products, selectedPhone, currentItems } = this.state;

    return (
      <div className="container" id = "main-container">
        <h1 className="text-center">Thế giới di động</h1>
        <ProductList
          products={products}
          title="Danh Sách sản phẩm"
          onPhoneSelect={this.onPhoneSelect}
          currentItems = {currentItems}
          addItems = {this.addItems}
        />
        <ProductDetail selectedPhone={selectedPhone} />
      </div>
    );
  }
}

export default SmartPhoneStore;

/*
  SmartPhoneStore
      ProductList
          ProductItem
          ProductItem
          ProductItem
          ProductItem
          ....
      ProductDetail
*/
