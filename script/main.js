function inputData() {
    const prodName = document.getElementById('prodName').value
    const prodPrice = document.getElementById('prodPrice').value
    const prodPic = document.getElementById('prodPic').value

    const arrayData = new Object();

    arrayData.prodData = (name, price, pic) => {
        this['name'] = name;
        this['price'] = price;
        this['picture'] = pic;
    }

    
}