/* Dado un arreglo de enteros 'nums' y un numero entero 'target' devuelve el indice de los dos numeros que suman el valor 'target' */


/*Se define una funcion llamada 'twoSum' que toma dos parametros
    * 'nums': un arreglo de numeros
    * 'target': un numero que querremos que sumen del array */
function twoSum(nums, target) {
    const valores = {};

    // for que recorre todos los elementos del array 'nums'. La varible 'index' representa el indice actual en el arreglo
    for(let index = 0; index < nums.length; index++) {
        // Dentro del bucle se calcula el complemento necesario para el 'target' restando el elemento actual, dando resultado el 'target'
        const complemento = target - nums[index];

        // Se verific si el complemento calculado ya existe como 'valores'
        // Si existe ('!== undefined') significa que hemos encontrado dos numeros que suman el 'target'
        // Devuelve un array con dos elementos
        if(valores[complemento] !== undefined) {
            return[index, valores[complemento]];
        }
        // Si el complemento no se ha encontrado, se almacena el numero actual en el objeto 'valores'.
        //Esto asegura que cualquier numero futuro que requiera este complemento pueda ser encontrado
        valores[nums[index]] = index;
    }
}