function solution(numbers) {
    var answer = -1;
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i of arr) {
        if(!numbers.includes(i)) answer += i;
    }
    return answer != -1 ? answer + 1 : answer;
}