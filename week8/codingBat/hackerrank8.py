N = int(input(""))
x = input("")
a1 = x.split()
A = list(map(int, a1))
x = max(A)
k1 = list()
for i in range(len(A)):
    if x != A[i]:
        k1.append(A[i])
y = max(k1)
print(y)