function filterBy(arr, dataT) {
    var result = arr.filter(function (argument) {
        return typeof (argument) != dataT
    })
    return result
}

let arr = ['hello', 'world', 23, '24', null];
alert("Your array: ", arr);
let datatype = prompt("Write type of data!");
console.log(filterBy(arr, datatype));
alert("Result: ", filterBy(arr, datatype));
