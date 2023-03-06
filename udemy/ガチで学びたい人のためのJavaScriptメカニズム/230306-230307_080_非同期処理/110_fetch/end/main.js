// fetch('users.json').then(function(response) {
//   console.log(response.json());
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// })

async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for(const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`)
  }
}

fetchUsers();