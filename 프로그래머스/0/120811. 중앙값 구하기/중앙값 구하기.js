function solution(array) {
  var answer = 0;
  array.sort((a, b) => a - b);
  console.log(array);
  const index = Math.trunc((array.length) / 2);
  answer = array[index];
  return answer;
}