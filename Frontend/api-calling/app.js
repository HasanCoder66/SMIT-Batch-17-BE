console.log("js is running -->");


// fetch("https://dummyjson.cm/users")
// .then((response) => response.json())
// .then((result) => {
//     console.log("result -->", result);
// }).catch((error) => {
//     console.log("error ", error);

// })


const apiCalling = async () => {
    try {
        const apiRes = await fetch("https://dummyjson.com/users")

        let result = await apiRes.json()

        const { users } = result

        console.log(users);

        let filteredUserOver25 = users.filter((user) => {
            if (user.id > 25) {
                return user
            }

        })


        console.log(filteredUserOver25);
        



    } catch (error) {
        console.log(error);

    }
}

apiCalling()