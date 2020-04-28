// function each(data) {
//     let iterator = data[Symbol.iterator]();
//     console.log(iterator);
//     let item = { done: false };
//     while (!item.done) {
//         item = iterator.next();
//         if (!item.done) {
//             console.log(item.value);
//         }
//     }
// }
function each(data) {
    for (let item of data) {
        console.log(item);
    }
}
let arr = [1, 2, 3, 4, 5, 6];
let str = '123456';
each(arr);
