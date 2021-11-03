// function solution(command) {
//
//     function upvote() {this.upvotes = this.upvotes + 1}
//     function downvote() {this.downvotes++}
//     function score() {console.log(this.upvotes, this.downvotes)
//   this.upvote();
//   console.log(this);
//   return ;
// }
//
// let post = {
//   id: '3',
//   author: 'emil',
//   content: 'wazaaaaa',
//   upvotes: 100,
//   downvotes: 100
// };
//
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
