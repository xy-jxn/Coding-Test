function solution(num_list) {
    var answer = [];
    const evenNum = num_list.filter(n => n % 2 === 0);
    const oddNum = num_list.filter(n => n % 2 !== 0);
    answer = [(evenNum.length), (oddNum.length)];
    return answer;
}