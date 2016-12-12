/**
 * Find the next equal or higher number within an array
 * @arr {array} Array to iterate through.
 * @num {number} Number to compare.
 * @returnEqual {boolean} Return an equal number if found.
 * @returnLast {boolean} Return last number if no equal or higher one found.
 * @prop {string} Indicates @arr contains objects. Get number from object[prop].
 */
export function nextHighestNumber(arr, num, returnEqual, returnLast, prop){
  let i = 0;
  for (i=0; i<arr.length; i++){
    let arrNum = (prop ? arr[i][prop] : arr[i]);
    if (returnEqual && arrNum === num){
      return arr[i];
    }else
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
 * Shallow merge two objects
 * We're just merging style objects so no need for object-assign ponyfill
 */
export function merge(obj1, obj2){
  for (let attrname in obj2) { 
    obj1[attrname] = obj2[attrname]; 
  }

  return obj1;
}

/**
 * Get the width of a DOM element
 * TODO: Test this in other browsers
 */
export function elementWidth(el){
  return el.clientWidth;
}