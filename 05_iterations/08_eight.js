const arr = [1,2,3]
// const total = arr.reduce(function(acc,currval){
//     console.log(`the value of acc is ${acc} and the curr value is ${currval}`);
    
//     return acc+currval
// },3)
const myTotal  = arr.reduce((acc,curr) => acc+curr,0)
console.log(myTotal);


const shoppingCart  = [
    {
        itemName : "manforce ",
        price: 499
    },
    {
        itemName : "kalakhata",
        price: 4999
    },
     {
        itemName : "deurex",
        price: 999 
    },
]
 const totalPrice  =  shoppingCart.reduce((acc,item) =>( acc + item.price),0)
 console.log(totalPrice);