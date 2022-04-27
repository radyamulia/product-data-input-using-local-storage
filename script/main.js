const arrayData = {
    prodDataInput: function(name, price, pic) {
        this.name = name;
        this.price = price;
        this.picture = pic;
    }
}

function inputData() {
    const prodName = document.getElementById('prodName').value
    const prodPrice = document.getElementById('prodPrice').value
    const prodPic = document.getElementById('prodPic').value

    const prodData = new arrayData();
    
    const stringifiedArrayObj = JSON.stringify(prodData.prodDataInput(prodName, prodPrice, prodPic))
    localStorage.setItem
}