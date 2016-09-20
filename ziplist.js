/**
 * Solving E27
 * Created by Michael on 9/19/2016.
 */

let listOne = ['a', 'b', 'c'];
let listTwo = [1, 2, 3];

function zipList(leftList, rightList) {
  let newList = [];
  for (let i = 0; i < leftList.length; i++) {
    newList.push(leftList[i], rightList[i]);
  }
  return newList;
}

console.log(zipList(listOne, listTwo));

function zipListTheSimpleWay(leftList, rightList) {
  return _.flatten(_.zip(leftList, rightList));
}

console.log(zipListTheSimpleWay(listOne, listTwo));
