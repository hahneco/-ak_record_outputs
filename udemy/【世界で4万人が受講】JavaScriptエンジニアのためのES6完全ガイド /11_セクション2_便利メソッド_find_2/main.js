'use strict'

console.log('findメソッド演習');

/*

// 車のコレクションCarのうち、特定の条件を満たした車を抽ししたい。
function Car(model) {
  this.model = model;
  // this.color = color;
}

const cars = [
  new Car('プリウス'),
  new Car('ノート'),
  new Car('アクア'),
];

let findCar;

console.log(cars);

findCar = cars.find(function (car) {
  return car.model === 'アクア'
});

console.log(findCar)

*/

const posts = [
  { id: 1, title: '古い投稿' },
  { id: 2, title: '新しい投稿' }
]

let comment = {
  postId: 2, content: 'いいね！'
}

function postForComment(posts, comment) {
  return posts.find(function (post) {
    // console.log(post)
    // console.log(posts)
    // console.log(comment)
    return post.id === comment.postId;
  })
}
console.log(postForComment(posts, comment));
// postForComment(posts, comment);
