import sys
input = sys.stdin.readline

n, k = map(int, input().split())
num_list = [int(input()) for _ in range(n)]
num_list.sort(reverse=True)

answer = 0
for i in range(0, len(num_list)) :
    answer += k // num_list[i]
    k %= num_list[i]
    if k == 0 : break
print(answer)