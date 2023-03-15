const getitemFromInfut = () => {
    const itemName = document.getElementById('item-name');
    const name = itemName.value;
    const itemQuantity = document.getElementById('item-quantity');
    const quantity = itemQuantity.value;
    itemName.value = '';
    itemQuantity.value = '';
    // console.log(itemName, itemQuantity);
    showIteminUI(name, quantity);
    SaveitemToLocalStorage(name, quantity);
}

const showIteminUI = (itemName ,itemQuantity) => {
    const ul = document.getElementById('showItem');
   const li=  document.createElement('li');
    li.innerText = `${itemName} : ${itemQuantity}`
    ul.appendChild(li);
}

const getlocalStorageCart = () => {
    let cart = {};
    const StorageCart = localStorage.getItem('cart');
    if (StorageCart) {
        cart = JSON.parse(StorageCart);
    }
    return cart;
}

const SaveitemToLocalStorage = (name , quantity) => {
    const cart = getlocalStorageCart();
    cart[name] = quantity;
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart);
}

const displyProductFromStorage = () => {
    const Cartitem = getlocalStorageCart();
    // console.log(Cartitem);
    for (const product in Cartitem) {
        const quantity = Cartitem[product];
        // console.log(product ,quantity);
        showIteminUI(product ,quantity)
    }
}
displyProductFromStorage();