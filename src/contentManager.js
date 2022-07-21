const server = "http://localhost:5000/api/user";

let user;


  fetch(server)
    .then((res) => res.json())
    .then(async function (data) {
      user = data;
      console.log(user)
    });




export { user };
