let dataBlueprint = {
  name: "",
  price: "",
  picture: null,
};

/**
 * @returns {object[]}
 */
function getDataFromLS() {
  const data = JSON.parse(localStorage.getItem("product-data"));
  return data || [];
}

/**
 * Invoked when submitting form
 */
function onSubmit() {
  const prodName = document.getElementById("prodName").value;
  const prodPrice = document.getElementById("prodPrice").value;
  const prodPic = document.getElementById("prodPic").value;

  const productData = {
    name: prodName,
    price: parseInt(prodPrice, 10),
    picture: prodPic,
  };

  const payload = [...getDataFromLS(), { ...productData }];
  const stringifiedArrayObj = JSON.stringify(payload);

  localStorage.setItem("product-data", stringifiedArrayObj);
  renderDataRows();
}

/**
 * Craft a data row
 * @returns {HTMLElement}
 */
function composeDataRow({ name, price, picture }) {
  const dataRow = document.createElement("tr");
  const nameCol = document.createElement("td");
  const priceCol = document.createElement("td");
  const pictureCol = document.createElement("td");

  nameCol.textContent = name;
  priceCol.textContent = price;
  pictureCol.textContent = picture;

  dataRow.appendChild(nameCol);
  dataRow.appendChild(pictureCol);
  dataRow.appendChild(priceCol);

  return dataRow;
}

/**
 * Renders/re-renders data rows on the table
 */
function renderDataRows() {
  const data = getDataFromLS();

  if (data.length) {
    console.log("rendering data");
    const tableHeading = document.getElementById("table-heading");
    const totalPrice = document.getElementById("total-price");
    let total = 0;

    data.forEach((product) => {
      const dataRow = composeDataRow(product);
      tableHeading.insertAdjacentElement("afterend", dataRow);
      total += product.price;
    });
    totalPrice.textContent = `Rp ${total}`;
  }
}

/////////////////////
function onInit() {
  renderDataRows();
}

onInit();
