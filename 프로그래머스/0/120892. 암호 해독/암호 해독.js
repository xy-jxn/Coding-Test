function solution(cipher, code) {
    var answer = [];
    cipher = cipher.split("");
    cipher.unshift('');
    for(let i = 0; i < cipher.length; i++){
        if (i % code == 0){
            answer.push(cipher[i]);
        }
    }
    answer = answer.join('');
    return answer;
}
