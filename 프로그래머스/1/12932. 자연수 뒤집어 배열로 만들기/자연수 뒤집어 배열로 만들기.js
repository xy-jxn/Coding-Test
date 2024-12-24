function solution(n) {
    var arr = String(n).split('').map(item => Number(item));
    const answer = [];
    for(let i = arr.length - 1; i >= 0; i--){
        answer.push(arr[i]);
    }
    return answer;
}