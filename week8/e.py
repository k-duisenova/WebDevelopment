v = int(input(""))
t = int(input(""))
s = 109
if (v > 0):
    k = ((v*t)%s)
else:
    k = s-((-v)*t)%s

if (k == 109):
    k = 0

print(k)