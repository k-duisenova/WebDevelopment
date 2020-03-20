n = int(input())
mass = list(map(int, input().split()))
for i in range(0, int(n/2)):
    temp = mass[i]
    mass[i] = mass[n-i-1]
    mass[n-i-1]=temp

for m in mass:
    print(m, end=" ")