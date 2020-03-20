n = int(input())
mass = list(map(int, input().split()))
cnt = 0
for i in range(0, n):
    elem = mass[i]
    if elem > 0:
        cnt = cnt+1
print(cnt)