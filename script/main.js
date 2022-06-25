const dataBlueprint = {
  name: "",
  pic:"",
  price: null
}

function getData() {
  return JSON.parse(localStorage.getItem("productData"));
}

function setData(data) {
  return localStorage.setItem("productData", JSON.stringify(data));
}

function addData() {
  let existingData = getData();
  if (existingData == null) {
    existingData = [];
  }
  const prodName = document.getElementById("prodName").value;
  const prodPic = document.getElementById("prodPic").value;
  const prodPrice = document.getElementById("prodPrice").value;
  let prodData = {
    name: prodName,
    pic: prodPic,
    price: prodPrice,
  };
  existingData.push(prodData);
  setData(existingData);
}

function objToArray(obj) {
  let arrData = [];
  for (let i = 0; i < obj.length; i++) {
    arrData.push([obj[i].name, obj[i].pic, obj[i].price]);
  }
  return arrData;
}

function countTotal() {
  let data = getData();
  if (data == null) {
    return 0;
  }
  let arr = objToArray(data);
  let totalPrice = 0,
    price = [];

  for (let i = 0; i < arr.length; i++) {
    totalPrice += parseInt(arr[i][2]);
  }

  // print into table
  let tableContent = document.getElementById("total-price");
  let cell = document.createElement("td");
  cell.innerHTML = "Rp. " + totalPrice;
  tableContent.appendChild(cell);
}

function printTable() {
  let data = getData();
  if (data == null) {
    return 0;
  }
  // turn the object into array
  let arrData = objToArray(data);
  // print the data into array
  let tableContent = document.getElementById("data-body");
  for (let i = 0; i < arrData.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("td");
      switch (j) {
        case 0:
          cell.innerHTML = arrData[i][j];
          break;
        case 1:
          cell.innerHTML = arrData[i][j];
          break;
        case 2:
          cell.innerHTML = "Rp. " + arrData[i][j];
          break;
      }
      row.appendChild(cell);
      tableContent.appendChild(row);
    }
  }
  countTotal();
}
