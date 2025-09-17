// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Yahan ye wala error aaya: ", error ));



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(my_response => my_response.json())
//     .then(first_user => {
//         first_user.forEach( user => {
//             console.log(`First User Name: ${user.name}\nFirst User Email: ${user.email}`)
//         })
//     })
//     .catch(error => console.error("Ye error aagaya!: ", error))



// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(my_response => my_response.json())
//     .then(user => {
//             console.log(`First User Name: ${user[0].name}\nFirst User Email: ${user[0].email}`)
//         })
//     .catch(error => console.error("Ye error aagaya!: ", error))