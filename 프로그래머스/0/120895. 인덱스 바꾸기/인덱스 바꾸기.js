function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    let exam = my_string[num1];
    my_string[num1] = my_string[num2];
    my_string[num2] = exam;
    return my_string.join().replaceAll(',','');
}