function positiveSum(arr) {
    let sumaTotal = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sumaTotal += arr[i];
        }
    }
    return sumaTotal;
}