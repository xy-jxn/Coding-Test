function solution(i, j, k) {
    var answer = 0;
    for(; i <= j; i++) {
        String(i).split('').forEach(num => {
            num.includes(String(k)) ? answer++ : answer;
        });
    }
    return answer;
}