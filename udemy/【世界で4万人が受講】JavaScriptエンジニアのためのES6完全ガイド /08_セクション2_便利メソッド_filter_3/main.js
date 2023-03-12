'use strict'

const post = { id: 4, title: '初めての投稿' };

// postId は post の id に紐づく
const comments = [
  { postId: 4, content: 'いい記事でしたね!' },
  { postId: 3, content: '勉強になりました!' },
  { postId: 4, content: 'なるほど。' }
];

// post.idの4に紐づくコメントだけを抽出したい
function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  })
}
commentsForPost(post, comments)
console.log(commentsForPost(post, comments));


console.log('post');
