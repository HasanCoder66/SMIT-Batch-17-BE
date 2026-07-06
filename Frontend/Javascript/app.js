// call apply bind


let userObj = {
    name : "hasan",
}

function printName (a, b){
console.log(this.name);

console.log(a + b);

}



// userObj.printName();

let user2Obj = {
    name: "qadir", 
}

// printName.call(user2Obj, "hello", "world")
// printName.apply(user2Obj, ["hello", "world"])


let bindResult = printName.bind(user2Obj, "hello", "world")
bindResult()



// Object Keyword


// let obj = new Object()
// let obj = {
//     address: {
//         city : "karachi"
//     }
// }

// Object.freeze(obj)
// // Object.seal(obj)

// obj.address.city = "lahore"
// obj.age = 23

// console.log(obj);

// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// let userObj = Object.assign({}, obj);

// userObj.name = "abdullah";
// userObj.address.city ="multan"
// console.log(userObj);
// console.log(obj);




// map

// let kuchBi = new Map()

// kuchBi.set("name" , "hasan")
// kuchBi.set(() => {} , "hasan")
// kuchBi.set({} , "hasan")


// console.log(kuchBi.get("{}"));

// // kuchBi.delete("name")
// // kuchBi.clear()
// console.log(kuchBi.has("name"));


// console.log(kuchBi);



// let obj = {
//     null : "one"
// }

// console.log(obj);





// set
// let arr = new Set();

// arr.add(10)
// arr.add(20)
// arr.add(30)

// arr.delete(10)
// console.log(arr.has(20));

// console.log(arr);

// console.log(arr.size);



// let nums = [1,1,2,2,3,4,5,6,7,7];

// let updatedNumsArr = [...new Set(nums)];

// console.log(updatedNumsArr);






// let userObj ={
//     name :"hasan",
//     address : {
//        city :{
//         name : "Karachi",
//         country :"pakistan"
//        }
//     }
// }

// deep copy


// let deepCopy = structuredClone(userObj);

// deepCopy.address.city = "lahore";

// // console.log(deepCopy);

// console.log(userObj);


// let deepCopy = JSON.parse(JSON.stringify(userObj));

// deepCopy.address.city.name = "Lahore"
// console.log(userObj);










// shallow copy


// const anotherObj = userObj;

// anotherObj.name = "qadir"
// console.log(userObj);



// const user2Obj = {...userObj};

// user2Obj.address.city = "lahore";
// console.log(userObj);



// Closures -->

// function outer (){
//     let username = "janiii"

    
//     function inner (){
//         // let username = "janiii2"
//         console.log(username);

//     }

//     inner()


// }


// outer()



// function outer (num){
//     let count = 0;

//     function increment(){
//         count++
//         console.log(count);
//     }

//     return increment
// } 



// const counter = outer()

// counter()
// counter()
// counter()

// let password = "kuch biiii"

// function outer (){
//     // let password = "asldkfaslkj";


//     function inner (){
// // let password = 12345678
//         function nestedInnerfn(){
// console.log(password);

//         }

//         nestedInnerfn()
//     }

//     inner()
// }

// outer()