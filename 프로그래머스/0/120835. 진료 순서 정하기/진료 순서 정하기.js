function solution(emergency) {
    var answer = [];
    const array = emergency.join();
    emergency.sort((a, b) => b - a);
    console.log(array);
    console.log(emergency);
    return array.split(',').map(item =>emergency.findIndex(num => num == item)).map(item => item += 1);
}