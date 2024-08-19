function solution(my_string) {
  var answer = '';
  const arr = Array.from(my_string);
  const num = my_string.length;
  
  for(var i = num-1; i >= 0; i--){
    arr.push(arr[i]);
  }
  arr.splice(0, num);
  answer = arr.join();
  answer = answer.replaceAll(',','');
  return answer;
}