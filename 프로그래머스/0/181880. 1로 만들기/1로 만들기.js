function solution(num_list) {
    var answer = 0;
    num_list.forEach(item => {
        while (item !== 1) {
            item % 2 == 0 ? item /= 2 : item = (item - 1 )/ 2;
            answer++;
        }
    })
    return answer;
}