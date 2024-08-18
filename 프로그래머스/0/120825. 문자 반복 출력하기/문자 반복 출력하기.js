function solution(my_string, n) {
    var answer = '';
    const arr =  Array.from(my_string);
    arr.forEach(
        (str) => answer += str.repeat(n)
    );
    
    return answer;
}