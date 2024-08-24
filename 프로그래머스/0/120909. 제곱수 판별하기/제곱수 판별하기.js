function solution(n) {
  var answer = 0;
  const number = Math.sqrt(n);
  const check = Math.trunc(number);
  answer = ((number === check) ? 1 : 2);
  return answer;
}