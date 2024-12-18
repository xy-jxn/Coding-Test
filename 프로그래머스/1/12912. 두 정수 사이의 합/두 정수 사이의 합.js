function solution(a, b) {
    var answer = 0;
    const min = a < b ? a : b;
    const max = a < b ? b : a;
    
    for(let i = min; i <= max; i++) {
        answer+= i;
    }
    return answer;
}