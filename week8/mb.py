n = int(input())
mass = list(map(int, input().split()))
for i in range(0, n):
    elem = mass[i]
    if elem % 2 == 0:
        print(elem, end = ' ')