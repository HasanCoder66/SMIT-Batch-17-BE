// let a:string = "hello";


// a = 12



// let b = 12;

// b = "str9ing"


// let arr:string[] = []

// arr.push("hello")
// arr.push(12)


// tuples -->

// let arr : [string, number] = ["", 1]


// enum -->

// enum UserRoles {
//         ADMIN = "admin",
//         GUEST = "guest",
//         SUPER_ADMIN = "superAdmin"
// }


// // UserRoles.ADMIN

// // UserRoles.GUEST


// enum statusCodes {
//     NOT_FOUND = 404,
//     SUCCESS = 200
// }


// statusCodes.SUCCESS




// Any -->
let a

a = 112;

// a = "adsfa"


// a.toLowerCase()


// unknown --> 
let b:unknown;

b = "ali"
b = 12


// type narrowing...
if(typeof b == "string"){
    b.toLowerCase()
}


// void -->


function abc (a:string, b:number):void{
    // return "hello"
}