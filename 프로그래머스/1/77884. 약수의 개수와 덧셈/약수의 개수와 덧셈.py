def solution(left, right):
    answer = 0
    for num in range(left, right + 1) :
        check = 0
        for i in range(1, num + 1) :  
            if num % i == 0 : 
                check += 1
        if check % 2 == 0 : answer += i
        else : answer -= i
    return answer