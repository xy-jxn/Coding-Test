function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(item => answer.push(item.slice(s, s+l)));
    return answer.filter(item => +item > k).map(item => +item);
}