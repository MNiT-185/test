async function runApi(){
    let result = await api();
    console.log('result: ', result)
    let result2 = await api2();
    console.log('result2: ', result2)
    let result3 = await api3();
    console.log('result3: ', result3)
}
  
runApi()
  
function api(){
    return 1;
}
  
function api2(){
    return 2;
}
  
function api3(){
    return 3;
}
