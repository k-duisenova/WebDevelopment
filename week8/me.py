n = int(input())
mass = list(map(int, input().split()))
s = False
for i in range(0, n-1):
    if (mass[i] < 0 and mass[i+1] < 0) or (mass[i] > 0 and mass[i+1] > 0):
        s = True
        break
    else:
        s = False
if s:
    print("YES")
else:
    print("NO")