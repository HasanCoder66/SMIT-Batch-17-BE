// desturcturing

// data types  
// primitives 
// reference 

// object | Array 

// let user = {
//     name : "azaan",
//     email :"azaan@gmail.com",
//     password : "13455678",
//     age : 12
// }


// let user2 = {
//     ...user,
//     isAdmin : true,
//     email : "qadir@gmail.com",
//     // address:{}
// }

// console.log(user2.address?.street);



// // {}

// const {name, email, ...others} = user

// console.log(others);


// // []
// const studentsArr = ["ali", "ali hasan", "abdul qadir", "sarim"]

// const [stu1,stu2, ...others] = studentsArr

// console.log(others);
// console.log(stu2);

// let stu1 = studentsArr[0]
// let stu2 = studentsArr[1]





// console.log(user.name, user.password);



// for loop

// start end change 

// variable initialization | condition | increment or decrement


// let i = 0 ;
// i < arr.length
// i++


// for (let i = 0; i < 4; i++){
//     console.log("mera i", i);
// }


// let const var 


// data 
// Primitives 

// number
// string
// boolean 
// null
// undefined
// symbol
// bigint


// Reference | Non Primitives

// [] 
// ()
// {}


// let a = "hasan"

// const a = "ali"

// a = "qadir"

// var a ;
// var a ;



// functions named fn

// function foo(){
//     console.log("hello world!");
    
// }


// foo()


// let jani = function (){
// console.log('====================================');
// console.log("janiiii");
// console.log('====================================');
// }


// jani()



// arrow function

// syntax 

// parameter 
// let abc = (a) => {
// return a
// }

// console.log(abc("janiii"));


// export var a = "a"


// let userObj = {}

// let arrr= [1,2,3,4,5]


// let arrOfObj = [userObj, userObj, userObj]



// higher order function | callback function


// function printName (name){
//     console.log("user name is", name);
    

//     // html css mapping 


// }



// function displayName (cb){

//     // api calling 4s  async await 

// cb("janiii")
// }


// displayName(printName)


let arr = [1,2,3,4]

// let four = arr.find((num) => num > 3)

// console.log(four);


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
//     myFind(arr[i])
    
// }



// console.log(myFind());


// function higherOrderFn (find){
    
// for(let i = 0; i < arr.length; i++){
    
// let returnVal = find(arr[i])

// if(returnVal){
//     return returnVal
// }

    
// }
// }


// function myFind(num){
    
//     if(num > 3){
//     return num
    
// }



// }

// console.log(higherOrderFn(myFind));




// for (let i = 0 ; i < arr.length; i++){
//     console.log('====================================');
//     console.log(arr[i]);
//     console.log('====================================');
// }


// let findTwo = arr.find((num) => {
//     if(num == 2 ){
//         return num
//     }
// })

// console.log('====================================');
// console.log(findTwo);
// console.log('====================================');



// const higherOrderFn = (cb) => {
//     console.log("it is a higher order function ");

//     cb("ayan")
    
// }


// higherOrderFn((name) => {
//     console.log(name);
    
// })
let list = document.getElementById("list")
let array = ["ali","aslam","shakoor"]

// /Array Higher order methods

// map  filter find reduce forEach

// forEach 

// let itemsArr  = []
// let returnVal = array.forEach((item) => {
// itemsArr.push(item)


// })

// console.log(itemsArr)


// map ==> modification



// let cardParent = document.getElementById("cardParent")


// let cardParentHTML = array.map((item) => {
//  let cardHTML = ` <div id="card">
// <p>${item}</p>
//     </div> `


    

//     return cardHTML
    
// })

// cardParent.innerHTML = cardParentHTML.join(" ")

// console.log('====================================');
// console.log(cardParentHTML);
// console.log('====================================');



let arr1 = [1,2,3,4,5]

// let returnFilter = array.filter((items) => {
    
// //     if(items > 3){
// // return items
// //     }

// // if(items == "ali"){
// // return items
// // }
    
// })

// let returnFilter = arr1.filter((item) => item > 2)

// console.log(returnFilter);



// let findReturn = arr1.find((item) => {
//     // console.log(item);

//     if(item >    2){
//         return item
//     }
    
// })

// console.log(findReturn);


let users = [
    {name :"Ayaan", age :17},
    {name :"Sarim", age :17},
    {name :"Qadir", age :21},
]



// let findUser = users.find((u) => {
//     if(u.age > 17){
//         // console.log(u.name);
// return u
    
        
//     }
// })


// console.log('====================================');
// console.log(findUser);
// console.log('====================================');






// let returnReduce = users.reduce((prevVal, currentVal, idx) => {
// // console.log(prevVal.age + currentVal);

// console.log(idx);



//     // return prevVal.age + currentVal.age
    
    
// })


// console.log(returnReduce);
