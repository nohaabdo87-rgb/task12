// 1- calculate and print the sum

// const numbers = [10, 20, 30, 40, 50];

// function sumNum(){
//      let total=0;

// numbers.forEach((ele,index)=>{

// total +=ele;
// })
// console.log(total)
// } 
// sumNum();

// -------------------------------

// 2- Create a new array where every number is doubled.

//  const numbers = [1, 2, 3, 4, 5];
//   numbers.forEach((ele,index)=>{
//     console.log(ele*2)
//   })

// ------------------------------
// 3- Create a new array containing only the names.

// const users = [
//   { id: 1, name: "Ahmed", age: 22 },
//   { id: 2, name: "Mona", age: 25 },
//   { id: 3, name: "Ali", age: 20 }
// ];

// users.forEach((ele,index)=>{
//     console.log(ele.name)
// });

// -------------------------------

// 4- Create a new array containing only even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//  numbers.forEach((ele,index)=>{
//    if (ele % 2 ==0)
//     console.log(ele)
//  });

// -------------------------------
// 5- Return users whose age is 18 or greater.

// const users = [
//   { name: "Ahmed", age: 17 },
//   { name: "Mona", age: 22 },
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 30 }
// ];

// const newUsers = users.filter((element) => {
//      return element.age > 18

//      });
//        console.log(newUsers)
       
// -------------------------------

// 6- Find the product with the name "Phone".

// const products = [
//   { id: 1, name: "Laptop", price: 30000 },
//   { id: 2, name: "Phone", price: 15000 },
//   { id: 3, name: "Tablet", price: 10000 }
// ];

// const newProduct=products.find(ele=> ele.name==="Phone");
//     console.log(newProduct)

// -------------------------------

// 7- Check that all products has stock.

// const products = [
//   { name: "Laptop", stock: 0 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 }
// ];
 
// const newPro= products.filter(ele=> ele.stock==0)
// console.log(false)

// -------------------------------

// 8- Calculate the cart total price.

const cart = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 }
];
  

function sumPrice(){
    let sum =0 ;

cart.forEach((ele)=>{

   sum += ele.price
})
 console.log(sum)
}
sumPrice()



