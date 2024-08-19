function solution(s1, s2) {
    var answer = 0
    for(var i = 0; i < s2.length; i++) {
        var check = s1.includes(s2[i]);
        if(check == true) {
            answer++;
        }
    }
    return answer;
}