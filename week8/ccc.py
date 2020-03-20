from math import sqrt
from math import ceil

a = int(input(""))
b = int(input(""))
for i in range(a, b+1):
    s = ceil(sqrt(i))
    if s*s == i:
        print(i, "", end="")