n = int(input())
value = 1
b = False
while value < n:
    value *= 2
    if value == n:
        b = True

if b or n==1:
    print("YES")
else:
    print("NO")
