n = int(input())
mass = list(map(int, input().split()))
cnt = 0
for i in range(0, n-1):
    if mass[i] < mass[i+1]:
        cnt = cnt+1
print(cnt)