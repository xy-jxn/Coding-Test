function solution(num_list) {
  var answer = [];
  const num = answer.length;
  
  function changeArr(item) {
      answer.unshift(item);
  }

  num_list.forEach(changeArr);
  return answer;
}