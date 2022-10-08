const p = str => {console.log(str)}
// Your solution for 22-intersection here:
const intersection = (arr1, arr2) => {
  arrObj = arr1.reduce((obj, el) => {
    obj[el] = el
    return obj
  },{})
  return p(arr2.filter(el => (arrObj[el] && el === arrObj[el])))
}
intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]