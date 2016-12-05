/**
 * Find the next equal or higher number within an array
 * @prop {string} get number from arr[i][prop] instead of arr[i]
 * @returnLast {boolean} Return last number if no equal or higher one found
 */
export function nextHighestNumber(arr, num, prop, returnLast){
  let i = 0;
  for (i=0; i<arr.length; i++){
  	let arrNum = (prop ? arr[i][prop] : arr[i]);
    if (arrNum >= num){
      return arr[i];
    }
  }
  if (returnLast){
  	return arr[i-1];
  }else{
  	return false;
  }
}


/**
 * Get the width of a DOM element
 * TODO: Test this in other browsers
 */
export function elementWidth(el){
	return el.clientWidth;
}