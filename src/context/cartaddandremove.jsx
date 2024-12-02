const addToCart = (id,name,price)=>{
    let data = []
    if(JSON.parse(localStorage.getItem('cartItem')) == []){
        data = []
    }else{
        data = JSON.parse(localStorage.getItem('cartItem'))
    }
    data.push(
        {
            'id': id,
            'name': name,
            'price': price
        }
    )
    localStorage.setItem('cartItem',JSON.stringify(data))
    console.log(data)
    // alert("Items Added")
}
const emptyCart = ()=>{
    let data = JSON.parse(localStorage.getItem('cartItem'))
    data = []
    localStorage.setItem('cartItem',JSON.stringify(data))
    console.log(data)
    alert("Cart Emptied")
}
const removeItemCart = (id,name,price)=>{
    let data = JSON.parse(localStorage.getItem('cartItem'))
    data.pop(
        {
            'id': id,
            'name': name,
            'price': price
        }
    )
    localStorage.setItem('cartItem',JSON.stringify(data))
    console.log(data)
    alert("Items Removed")
}
export {addToCart, emptyCart ,removeItemCart};