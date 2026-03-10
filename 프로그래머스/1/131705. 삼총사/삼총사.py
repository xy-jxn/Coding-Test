def solution(number):
    answer = []
    end = len(number)
    for i in range(0, end) :
        for j in range(0, end) :
            if j == i : break
            for k in range(0, end) :
                if k == i : break
                if k == j : break
                if number[i] + number[j] + number[k] == 0 :
                    answer.append([number[i], number[j], number[k]])
    return len(answer)