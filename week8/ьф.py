n = int(input())
mass = list(map(int, input().split()))
for i in range(0, n):
    elem = mass[i]
    index = i
    if index % 2 == 0:
        print(mass[index], end = ' ')