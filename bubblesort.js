bubbleSort = (array) => {
  let counter = array.length - 1;
  for (let i = 0; i < counter; i++){
    swap (array[i], array[i + 1]);
    counter--;
  }
  return array;
}

function swap (a, b){

  if (a > b){
    return (b, a)
  }
  return (a, b)

}
