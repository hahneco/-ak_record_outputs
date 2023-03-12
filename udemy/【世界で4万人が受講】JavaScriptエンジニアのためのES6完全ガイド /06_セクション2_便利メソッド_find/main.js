'use strict'

const users = [
  { name: '太郎' },
  { name: '二郎' },
  { name: '三郎' }
]

let user;

for (i = 0; i < user.length; i++) {
  if (users[i].name === '二郎') {
    user = users[i].name;
  }
}

console.log('findメソッド')
console.log(user)
