var cal = (arr) => {
    return (arr.length === 0) ? 0 : arr[0] + cal(arr.slice(1));
}
var arr = [5, 9, 6, 8, 4, 6]
console.log(cal(arr))
