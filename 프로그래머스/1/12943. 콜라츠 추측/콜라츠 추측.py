def solution(num):
    result = 0
    while num != 1:
        result += 1
        if num % 2 : num = num * 3 + 1
        else : num = num / 2
        if result == 500 :
            result = -1
            break
    return result