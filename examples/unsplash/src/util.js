/**
 * Find the next equal or higher number within an array
 * Return the last number if none
 * @prop {string} get number from arr[i][prop] instead of arr[i]
 */
export function nextHighestNumber(arr, num, prop){
  let i = 0;
  for (i=0; i<arr.length; i++){
  	let arrNum = (prop ? arr[i][prop] : arr[i]);
    if (arrNum >= num){
      return arr[i];
    }
  }

  return arr[i-1];
}


/**
 * Get the width of a DOM element
 * TODO: Test this in other browsers
 */
export function elementWidth(el){
	return el.clientWidth;
}