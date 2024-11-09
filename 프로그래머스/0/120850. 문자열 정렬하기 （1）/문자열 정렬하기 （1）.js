function solution(my_string) {
    var answer = [];
    
    return my_string.split('').filter(item => !(item >= "a" && item <= "z")).map(item => +item).sort((a, b) => a - b);
}