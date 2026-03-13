import sys
input = sys.stdin.readline

n = int(input())
roads = list(map(int, input().split()))
price = list(map(int, input().split()))
answer = 0

min_price = price[0]
for i in range(n - 1) :
    min_price = min(price[i], min_price)
    answer += (min_price * roads[i])
print(answer)