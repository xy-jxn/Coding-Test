function solution(a, b, c) {
    var answer = 0;
    if((a !== b) && (a !== c) && (b !== c)) {
        answer = a + b + c;
    } else if((a == b) && (a == c)) {
        answer =  (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    } else {
        answer =  (a + b + c) * (a*a + b*b + c*c);
    }
    return answer;
}