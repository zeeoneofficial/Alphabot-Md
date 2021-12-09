const ig = require('./index');

/*ig.fetchPost('https://www.instagram.com/p/CMBZUsMALA_/').then(res => {
 console.log(res);
})
*/

ig.fetchUser('adiraas.p').then(res => {
  console.log(res);
})