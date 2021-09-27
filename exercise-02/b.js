var api = () => {
    return new Promise(function (resolve, reject) {
      resolve(1);
    });
}
var api2 = () => {
    return new Promise(function (resolve, reject) {
      resolve(2);
    });
}
var api3 = () => {
    return new Promise(function (resolve, reject) {
      resolve(3);
    });
}
api().then(function(result){
    console.log('result: ', result);
    return api2();
}).then(function(result2){
    console.log('result2: ', result2);
    return api3();
}).then(function(result3){
    console.log('result3: ', result3);
})
